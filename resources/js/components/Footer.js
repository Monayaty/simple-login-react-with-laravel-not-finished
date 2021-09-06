import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';

class Footer extends Component{
	state = { activeItem: 'About us' }
 	handleItemClick = ({ e, name }) => this.setState({ activeItem: name })

	render(){
		const { activeItem } = this.state

		return(
			<div>
				<Segment>
					<Menu secondary className="margin-top">
				        <Menu.Item
				          name='about us'
				          active={activeItem === 'about us'}
				          onClick={this.handleItemClick}
				        />
				        <Menu.Item
				          name='contact us'
				          active={activeItem === 'contact us'}
				          onClick={this.handleItemClick}
				        />
				        <Menu.Item
				          name='sign in/ sign up'
				          active={activeItem === 'sign in/ sign up'}
				          onClick={this.handleItemClick}
				        />

				        <Menu.Menu position='right'>
				         <Menu.Item
				            name='Copyright 2021'
				        />
				        </Menu.Menu>
				    </Menu>
			    </Segment>
			</div>
		)
	}
}

export default Footer;
