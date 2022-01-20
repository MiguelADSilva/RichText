import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class RichText extends Component {
  state = {
    isTitleEmpty: true,
    isBodyEmpty: true,
    body: "",
    post: [],
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const post = {
      body: this.state.body,
    };
    this.setState({
      body: "",
    });
  };

  onBodyChange(e) {
    this.setState({
      body: e,
      isBodyEmpty: false,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <ReactQuill
              modules={RichText.modules}
              formats={RichText.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onBodyChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

RichText.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italix", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

RichText.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];
