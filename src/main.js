import { Component } from 'react';


// let beastsArray = [
//   {
//     image_url:
//       "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     title: "UniWhal",
//     description: "A unicorn and a narwhal nuzzling their horns",
//     keyword: "narwhal",
//     horns: 1,
//   },

//   {
//     image_url:
//       "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//     title: "Rhino Family",
//     description: "Mother (or father) rhino with two babies",
//     keyword: "rhino",
//     horns: 2,
//   },

//   {
//     image_url:
//       "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//     title: "Unicorn Head",
//     description: "Someone wearing a creepy unicorn head mask",
//     keyword: "unicorn",
//     horns: 1,
//   },
// ];

// function displayBeasts(array) {
//   for (let beast of array) {
//     let img = this.image_url;
//     let alt = "horned beast image";
//     let title = this.title;
//     let disc = this.description;

//     return `<HornedBeasts imgSrc="${img}" alt="${alt} title="${title} />`
//     console.log("beasts func is funcin")
//   }
// }

// let singleVariable = displayBeasts(beastsArray);
// console.log(singleVariable)

class Main extends Component {
  
  render() {
    return (
      <>
        <h1>Main is maining</h1>
        <HornedBeasts
          imgSrc="https://place-hold.it/300x500"
          alt="Horned Image"
          title="idk horned title"
        />
        <HornedBeasts
          imgSrc="https://place-hold.it/300x500"
          alt="Horned Image"
          title="idk horned title"
        />
      </>
    );
  }
}

class HornedBeasts extends Component {

  render() {
    return (
      <>
        <h2>Horned title</h2>
        <img
          src={this.props.imgSrc}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p>p description of the beast</p>
      </>
    );
  }
}

export default Main;