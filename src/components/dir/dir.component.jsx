import React from 'react';
import {connect} from 'react-redux';



import MenuItem from '../menu-item/menu-item.component';
import './dir.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';


const Directory = ({sections}) => (
    
    
     <div className="dir-menu">
       {sections.map(({ id, ...otherSectionProps}) =>(
       <MenuItem key={id} {...otherSectionProps}/>
       ))}
     </div>
  
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
