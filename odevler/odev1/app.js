import axios from "axios";

const getData = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data:user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + user_id
    );
    // console.log(user);
    // console.log(post);
    const data = {...user, post: post}
    console.log(data);
    resolve(data);
  });
};

export default getData;
