import React from "react";
import ListDetails from "./Components/ListDetails.jsx";
import WithLoading from "./WithLoading.jsx";
const ListWithLoading = WithLoading(ListDetails);
class HOC extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((json) => json.json())
        .then((repos) => {
          this.setState({ loading: false, repos: repos });
        });
    }, 3000);
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}
export default HOC;
