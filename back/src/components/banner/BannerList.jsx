/*
 * banner图列表
 * @Author: yixian
 * @Date: 2019-09-18 08:33:47
 * @Last Modified by: yixian
 * @Last Modified time: 2019-10-15 16:57:23
 */
import React, { Component } from 'react';
import { Table, Popconfirm, message, Checkbox } from 'antd';
import { getBannerList, bannerDelete, setBannerStatus } from '@/api/banner';

class BannerList extends Component {
	state = {
		bannerList: [],
		columns: [
			{
				title: 'IsShow',
				dataIndex: 'isShow',
				render: (text, record) => (
					<Checkbox
						checked={record.banner_status === 1 ? true : false}
						onChange={e => this.onChange(e, record)}></Checkbox>
				)
			},
			{
				title: 'Img',
				dataIndex: 'img',
				render: img => (
					<img src={img} alt='图片' className='show-banner-img' />
				)
			},
			{
				title: 'Name',
				dataIndex: 'banner_name'
			},
			{
				title: 'Action',
				dataIndex: 'action',
				render: (text, record) => (
					<Popconfirm
						title='确定要删除吗?'
						onConfirm={() => this.handleDelete(record)}>
						<span className='show-banner-del'>删除</span>
					</Popconfirm>
				)
			}
		],
		paginationProps: {
			pageSize: 3
		}
	};
	render() {
		const { columns, bannerList, paginationProps } = this.state;
		return (
			<Table
				columns={columns}
				dataSource={bannerList}
				pagination={paginationProps}
			/>
		);
	}
	componentDidMount() {
		this.showBanner();
		this.props.onRef(this);
	}
	handleDelete = record => {
		bannerDelete(record).then(res => {
			if (res.data.code === 1) {
				this.showBanner();
				message.success(res.data.msg);
			}
		});
	};
	showBanner = () => {
		getBannerList().then(res => {
			this.setState({
				bannerList: res.data.map(item => {
					return {
						...item,
						img: `http://localhost:7001/public/img/banner/${item.banner_name}`,
						key: item.id
					};
				})
			});
		});
	};
	onChange = (e, record) => {
		const status = e.target.checked;
		const id = record.id;
		setBannerStatus({ id, status });
		this.showBanner();
	};
}
export default BannerList;
