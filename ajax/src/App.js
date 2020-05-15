import React from 'react';


function App() {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("http://eunjinkoh.com/ajaxDB2.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.items
          });
        },
        // 주의: 컴포넌트의 실제 버그에서 발생하는 예외사항들을 넘기지 않도록 
        // 에러를 catch() 블록(block)에서 처리하기보다는 
        // 이 부분에서 처리하는 것이 중요합니다.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {products.map( product => (
            <li key={ product.name}>
              { product.name} { product.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
