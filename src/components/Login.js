/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABSlBMVEX////npyYuve8nq27ZG1AWp2jZFk3//v/D5dQlu+/npyEPp2b64+n478zn8PDevX7ZNV4qt+Zs0PD6//388PXeRXLg8+v9+vOc0rjy+/xSxu7ZAEbxr743sHbnqCbptFW77frEAETloQz11eLu5NXN5Oym0+WXzN7P5ufa6OOy0sKVwqrl7em42+hUvuhtv+h9u56IxucAs+3L4dFCq340q3jh7/Jit5GM0uuV3PDp+/yp5/jM8vpn0fS42+2exbFlsoV/wJqB0Ohuy/Rdu46M07hvwqDL7OAAo150zKI9vYEawO6H3vPg+PFMuouD06+158/h1dnHeYnFADjUpa/KS2fZt7/m2Lriw4/Nk5/j0abfAUbHNVbOW3XPS2rkqTntu2roumPxusjspLreMmHmuD7naoz6+Ob02JDjeJTrk6zx05PtyXH25bAHFo1nAAAE8ElEQVR4nO3a/V+bRgDH8TMJoYAPVWJixJCJU+ezs8ZpbNd1a6vW6qatDzM+Va3GdP7/v+4giRx6AV9LGgZ83795pa/C53Wc3L1KCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDUZEfHxsd+yhLRHpqYnJqanPbvltosMzPbK0lS79zM/dD0fFwQBKUwlfHxvtpI/XlBipmkhfHa0AtBiVuUxQlf761dxqsFrArVmTBRqCUwI4gefz0MlqTNmB1hidBF4Zf7BPH4+oDfN9gGy/Y0oA3G6Eg6zloM/8KYHYyxDfpUQiYVR4Q1v2/xuys6GsQGs4QMCGwC5Znft/jdoQF9F15JkW9AVtCAFGNS5BuQVTQwI0gxul+IcgORvHwl1cWi2kAkxR9qXqqRbOBg7pCi0MBrJxiFBiTbzaPW/7hhA1ENy0Z6Zq6Xa+7X2qERv4H44vWb3+ZDcby2NOf4LmT3jNLsknUJt8H0vECHBaEw5efdt0T3YKMEZoXebvMaXoPpxfqg8ibgL4TYJ7k0iG3OmhdxGqiL9pjy2ueHaNJor0sBcyaMEm6DZ+yxSiHt92M0ZdltFpgNfie8BiJ7whhXgn3E+IdXA/5+IZ1jh4T3fj9GM9RB9wQNG8Qd3qre/9T/V5/XPOgzGyiPGuScDfx+jKasejVYJg8WwHgu/bCB8s7vx2hKcdO9QaxIL8oWHC+/+mgeBPq0XSQrC67T4KN12cC6/bzr5gM71gMl0Esipbr9drRWA/OiDfttsOY920D4EOzPA0pd2ZT4FmIf6+u9urFuVVCUd9aHsd1AWN/e8vHuW6W42se1UmQuWtvYzuW2/1yrHjakC7mat38F+vciQ+V4eM1WOl2sH7eo6ZqtsBQI+L6vNdRs7STJrpHtzj4xTigK7uweD1d9Gqo+UffnveFPw3v7WfuizMFhD8fhQSj+g9Lfw5qWTCYTiWRCqzbY2bNGNO1kp37RUV42OuTHDCN/FPwlYVdL3KMNqJHn9aHScTWC2mPIHQ3IxmHQ34Z9JkGtwXHyfqB0Yl10aDQqYDKOfH2CpomnyYcNPpfYkX06cuNWoEOXz4K9Joyw08BaD8QTx8zYFb2mQeAnwtDDBqTzOTszkqcpMXPecDGoNTgP9LI4VHrcgB1J9qdIJu/V4Ivfj9GUC2eDi//UQA52gxF24icSI7wGpMdjPZC/+f0YTRFP2c+Da5Hb4M7Q3Rt0BfsLgf3FoNFp8LiB6PUyGPmg7xkutdrrkNQuCX8ekC7dJYKsB3waUENXJbo70EpXF9aPvAY0QqMlQTa+dvl6+62Rurzu77++TFV/4jYgN+Uzzo5JlvWz8o2Pt95Koj2b+Q1ohS6usBRwLGmNGkQJGnAb/FgX7P3h0zX+VpY78ofRqOCyX9Blwzjw+/7awX3PJOtRiOCxb5T1CLwOHg30gB8aPYnX+YF8Hv6J4HmGchaaT8NGxM6ryDcgqX7Hmeo1bfDF8S7kw/8ukFvH2XqFjnxjN87GP37fYBuMOI5ZO+mG6kZmztKMMBwXeBDJrR2hVLH2lMxEiMQ0oCvCbam6JCS1SnVXnSkb1lTQaYIIrAamVOVKM11d1g8W1PJXQ+4wDL0ckQRU6qJSqVywRyuZu3K5fBf+X4sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9C/GEpdGclshJQAAAABJRU5ErkJggg=="
          alt=""
        />

        <h1>Sign into Slack clone</h1>
        <p>just a slack clone with firebase authenication and redering</p>
        <Button onClick={signIn}> Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
