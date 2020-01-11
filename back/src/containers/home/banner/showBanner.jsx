/*
 * 展示banner图页面
 * @Author: yixian
 * @Date: 2019-09-18 08:34:18
 * @Last Modified by: yixian
 * @Last Modified time: 2019-10-15 16:22:32
 */
import React, { Component, Fragment } from 'react';
import { Upload, Icon, message } from 'antd';
import '@/assets/css/banner/showBanner.css';
import BannerList from '@/components/banner/BannerList';

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}
function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('您只能上传JPG/PNG文件!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('图像必须小于2MB!');
	}
	return isJpgOrPng && isLt2M;
}

class ShowBanner extends Component {
	state = {
		loading: false,
		action: '/home/addBanner',
		imageUrl: ''
	};
	handleChange(info) {
		if (info.file.status === 'uploading') {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, imageUrl => {
				this.child.showBanner();
				this.setState({
					imageUrl,
					loading: false
				});
				setInterval(() => {
					this.setState({
						imageUrl: '',
						loading: false
					});
				}, 2000);
			});
		}
	}
	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className='ant-upload-text'>轮播图</div>
			</div>
		);
		const { imageUrl, action } = this.state;
		return (
			<Fragment>
				<div className='add-banner-wrapper'>
					<div className='add-banner-upload'>
						<Upload
							name='avatar'
							listType='picture-card'
							className='avatar-uploader'
							showUploadList={false}
							action={action}
							beforeUpload={beforeUpload}
							onChange={this.handleChange.bind(this)}>
							{imageUrl ? (
								<img
									src={imageUrl}
									alt='avatar'
									style={{ width: '100%' }}
								/>
							) : (
								uploadButton
							)}
						</Upload>
					</div>
				</div>
				<div className='show-banner-wrapper'>
					<BannerList onRef={this.onRef} />
				</div>
			</Fragment>
		);
	}
	onRef = ref => {
		this.child = ref;
	};
}
export default ShowBanner;
