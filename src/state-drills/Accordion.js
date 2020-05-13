import React from 'react';

export default class Accordion extends React.Component {
     static defaultProps = {
          sections: []
     };

     state = {
          activeIndex: null
     }

     // event handler for making a section active
     sectionActiveHandler = (sectionIndex) => {
          this.setState({ activeIndex: sectionIndex })
     }

     //generate a section to be rendered in the list later
     //<li>, <button>
     generateSection(section, activeIndex, index) {
          return (
               <li className='Section' key={index}>
                    <button onClick={() => this.sectionActiveHandler(index)}>
                       {section.title}  
                    </button>
                    <p>{section.content}</p>
               </li>
          )
     }

// render our <ul> full of section elements
     render() {
          const { activeIndex } = this.state
          const { sections } = this.props
          return (
               <ul className='Accordion'>
                    {sections.map((section, index) =>
                    this.generateSection(section, activeIndex, index) 
                    )}
               </ul>
          )
     }
}