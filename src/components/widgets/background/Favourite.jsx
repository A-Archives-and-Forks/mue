import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarIcon2 from '@material-ui/icons/StarBorder';

export default class Favourite extends React.PureComponent {
    constructor(...args) {
        super(...args);
        this.state = {
            favourited: <StarIcon2 onClick={() => this.favourite()} />
        };
    }

  favourite() {
      if (localStorage.getItem('favourite')) {
        localStorage.removeItem('favourite');
        this.setState({ 
          favourited: <StarIcon2 onClick={() => this.favourite()} /> 
        });
      } else {
        const url = document.getElementById('backgroundImage').style.backgroundImage.replace('url("', '').replace('")', '');
        const credit = document.getElementById('credit').textContent;
        const location = document.getElementById('location').textContent;
        
        localStorage.setItem('favourite', JSON.stringify({ url: url, credit: credit, location: location }));
  
        this.setState({ 
          favourited: <StarIcon onClick={() => this.favourite()} /> 
        });
      }
  }

  componentDidMount() {
    if (localStorage.getItem('favourite')) {
      this.setState({ 
        favourited: <StarIcon onClick={() => this.favourite()} /> 
      });
    }
  }

  render() {
    if (localStorage.getItem('favouriteEnabled') === 'false' || localStorage.getItem('background') === 'false' || localStorage.getItem('customBackgroundColour') || localStorage.getItem('customBackground')) {
      return null;
    }
    
    return <div className='favourite'>
        {this.state.favourited}
    </div>
  }
}