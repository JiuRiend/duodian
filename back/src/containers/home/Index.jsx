/*
 * @Author: xiaoyu
 * @Date: 2019-09-18 01:55:08
 * @Last Modified by: yixian
 * @Last Modified time: 2019-10-15 16:06:40
 */
import 'antd/dist/antd.css';
import '@/assets/css/home/home.css';
import routeList from '@/config/router';
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
	state = {
		current: '1'
	};
	handleClick = e => {
		this.setState({
			current: e.key
		});
	};
	render() {
		return (
			<div className='box'>
				<Header>
					<h2>校园超市后台管理</h2>
				</Header>
				<Layout>
					<Sider>
						<div className='sider-left' style={{ height: '100%' }}>
							<Menu
								theme='dark'
								onClick={this.handleClick}
								style={{ width: 256 }}
								selectedKeys={[this.state.current]}
								mode='inline'>
								{' '}
								{routeList.map((item, index) => {
									return (
										<SubMenu
											key={index}
											title={
												<span>
													<Icon type='routeList' />
													<span>{item.name}</span>
												</span>
											}>
											{' '}
											{item.children.map(v => {
												return (
													<Menu.Item
														key={v.id}
														onClick={() => {
															this.props.history.push(
																v.path
															);
														}}>
														{v.name}
													</Menu.Item>
												);
											})}
										</SubMenu>
									);
								})}
							</Menu>
						</div>
					</Sider>
					<Content
						style={{
							background: '#F0F2F5',
							padding: 24,
							margin: 0,
							minHeight: 280
						}}>
						{this.props.children}
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Home;
