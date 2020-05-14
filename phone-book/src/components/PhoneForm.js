import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
      //전송을 막는다.
      e.preventDefault();
      // 상태값을 onCreate 를 통하여 부모에게 전달
      // 부모컴포넌트의 handleCreate함수를 호출. 매개변수로 state전달.
      this.props.onCreate(this.state);
      this.setState({
          name: '',
          phone: ''
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;