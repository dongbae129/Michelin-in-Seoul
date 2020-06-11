import React, { useState, useRef, useCallback, useMemo } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE_FRONT,
  UPLOAD_RESTARAURANT_INFO_REQUEST,
} from "../reducers/restaurant";
import axios from "axios";
const Upload = (props) => {
  const [name, setName] = useState("");
  const [star, setStar] = useState("");
  const [type, setType] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [weekday, setWeekday] = useState("");
  const [weekend, setWeekend] = useState("");
  const [descrip, setDescrip] = useState("");
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.restaurant);
  // const [state, setState] = useState({});

  const imageInput = useRef();

  const onChangeImage = useCallback((e) => {
    const imageData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageData.append("image", f);
    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageData,
    });
  }, []);
  const onClickImageInput = useCallback(() => {
    imageInput.current.click();
  }, []);
  const onSetName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onSetStar = useCallback((e) => {
    setStar(e.target.value);
  }, []);
  const onSetType = useCallback((e) => {
    setType(e.target.value);
  }, []);
  const onSetPhoneNum = useCallback((e) => {
    setPhoneNum(e.target.value);
  }, []);
  const onSetWeekday = useCallback((e) => {
    setWeekday(e.target.value);
  }, []);
  const onSetWeekend = useCallback((e) => {
    setWeekend(e.target.value);
  }, []);
  const onSetDescrip = useCallback((e) => {
    setDescrip(e.target.value);
  }, []);
  const onSetTag = useCallback((e) => {
    setTag(e.target.value);
  });
  const onSetLocation = useCallback((e) => {
    setLocation(e.target.value);
  });

  const onSubmit = () => {
    dispatch({
      type: UPLOAD_RESTARAURANT_INFO_REQUEST,
      data: {
        name,
        star,
        type,
        phoneNum,
        weekday,
        weekend,
        descrip,
        imagePaths,
        tag,
        location,
      },
    });

    props.history.push("/");
  };

  const removeImage = (e) => {
    let a = e.target.src.slice(22);
    dispatch({
      type: REMOVE_IMAGE_FRONT,
      data: imagePaths.indexOf(a),
    });
    return axios.delete("http://localhost:8010/api/restaurant/images", {
      data: { src: a },
    });
  };
  return (
    <div
      style={{
        background: "#e6fcf5",
        zIndex: 0,
        width: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <Form
        style={{
          width: "600px",
          height: "689px",
          margin: "0 auto",
          display: "flex",
        }}
        onFinish={onSubmit}
      >
        <div
          style={{
            width: "50%",
            marginRight: "2rem",
            // border: "1px solid black",
            borderRadius: "3px",
            background: "white",
          }}
        >
          <Form.Item label="이름">
            <Input value={name} onChange={onSetName} required />
          </Form.Item>
          <Form.Item label="별 개수">
            <Input value={star} onChange={onSetStar} required />
          </Form.Item>
          <Form.Item label="업종">
            <Input value={type} onChange={onSetType} required />
          </Form.Item>
          <Form.Item label="태그">
            <Input value={tag} onChange={onSetTag} required />
          </Form.Item>
          <Form.Item label="전화번호">
            <Input value={phoneNum} onChange={onSetPhoneNum} required />
          </Form.Item>
          <Form.Item label="위치">
            <Input value={location} onChange={onSetLocation} required />
          </Form.Item>
          <Form.Item label="평일">
            <Input value={weekday} onChange={onSetWeekday} required />
          </Form.Item>
          <Form.Item label="주말">
            <Input value={weekend} onChange={onSetWeekend} required />
          </Form.Item>
          <Form.Item label="설명">
            <Input.TextArea
              rows="8"
              value={descrip}
              onChange={onSetDescrip}
              required
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </div>
        <div
          style={{
            // border: "1px solid black",
            width: "50%",
            background: "white",
            overflow: "auto",
          }}
        >
          <input
            type="file"
            multiple
            ref={imageInput}
            hidden
            onChange={onChangeImage}
          />
          <Button onClick={onClickImageInput}>이미지</Button>
          <div onClick={removeImage}>
            {imagePaths.map((v, i) => (
              <div
                key={i}
                style={{
                  width: "50%",
                  height: "141px",
                  display: "inline-block",
                  boxSizing: "border-box",
                  padding: "6px",
                  zIndex: "3",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`http://localhost:8010/${v}`}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Upload;
