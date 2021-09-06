// import React, { Component } from 'react';

// class Card extends Component {
//   constructor(props) {
//     super(props);

//     // Define inline styles
//     this.styles = { backgroundColor: props.data.color || '#000' };
//   }

//   render() {
//     const { title, icon, details } = this.props.data;

//     return (
//       <div className="card-body" style={this.styles}>
//         <div className="icon-wrapper section">
//           <span className="icon">
//             <i className={icon} aria-hidden="true"></i>
//           </span>
//         </div>
//         <div className="text-wrapper section">
//           <div className="title"><span>{ title }</span></div>
//           <div className="details"><span>{ details }</span></div>
//         </div>
//       </div>
//     )
//   }
// }

// class CardGridView extends Component {
//   render() {
//     return (
//       <div className="card-grid-view">
//       {
//         this.props.data.map((cardData, index) => (
//           <Card data={ cardData } key={ "card-id-" + index } />
//         ))
//       }
//       </div>
//     )
//   }
// }

// // Placeholder dummy text details
// const TEXT_DATA = "Lorem ipsum dolor sit amet, elit. Pellentesque commodo quis enim quis rhoncus. Nunc consectetur adipiscing vel ullamcorper arcu.";

// // Static card data
// const CARD_DATA = [
//   {
//     'title': 'Typography',
//     'icon': 'fas fa-font',
//     'details': "I've studied Typography & Graphic Communication \
//                 at possibly the best Institution to do so in the \
//                 world - The University of Reading.",
//     'color': '#e75d5d'
//   },
//   {
//     'title': 'Responsive Web Design',
//     'icon': 'fas fa-magic',
//     'details': 'I design future proof mobile first reponsive websites \
//                 to the latest web standards. I also keep up with \
//                 the most recent best practices.',
//     'color': '#6fc0d1'
//   },
//   {
//     'title': 'UX Design',
//     'icon': 'far fa-user',
//     'details': 'User Experience takes precedence throughout \
//                 my entire process from research, through wireframes \
//                 to design and development.',
//     'color': '#7dc691'
//   },
//   {
//     'title': 'Interaction Design',
//     'icon': 'far fa-hand-paper',
//     'details': TEXT_DATA,
//     'color': '#dfbd42'
//   },
//   {
//     'title': 'Front-end Development',
//     'icon': 'fas fa-wrench',
//     'details': TEXT_DATA,
//     'color': '#d98e64'
//   },
//   {
//     'title': 'Wordpress',
//     'icon': 'far fa-edit',
//     'details': TEXT_DATA,
//     'color': '#de6bae'
//   }
// ]

// export default CardGridView;
