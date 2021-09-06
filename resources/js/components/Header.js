import React, { Component } from 'react';
import { Segment, Image, Input, Menu } from 'semantic-ui-react';

class Header extends Component{
	state = { activeItem: 'home' }
 	handleItemClick = ({ name }) => this.setState({ activeItem: name })

	render(){
		const { activeItem } = this.state

		return(
			<div>
				<div>
					<Image src="https://i.ibb.co/2Nfw5YJ/logo.png" size='small' centered />
				</div>
				<Segment>
					<Menu secondary>
				        <Menu.Item
				          name='home'
				          active={activeItem === 'home'}
				          onClick={this.handleItemClick}
				        />
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
				        <Menu.Item>
				            <Input icon='search' placeholder='Search...' />
				        </Menu.Item>
				         <Menu.Item
				            name='logout'
				            active={activeItem === 'logout'}
				            onClick={this.handleItemClick}
				        />
				        </Menu.Menu>
				    </Menu>
			    </Segment>
			</div>
		)
	}
}

export default Header;
