import React from 'react';
import { Form, Button, Input, InputNumber, Modal } from 'antd'
import insertValue from '../../utils/insertValue'

class Content3 extends React.Component {
    state = {};
    query = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let result = insertValue(values)
                Modal.success({
                    content: '更新后的新数组为：'+result.arr+'。目标值插入的index值为：'+result.index
                })
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Form>
                    <Form.Item
                        label="需更新数值"
                    >
                        {
                            getFieldDecorator('nums', {
                                rules: [
                                    { required: true, message: '请输入需要更新的数值!' }
                                ],
                            })(
                                <Input placeholder="请输入需要更新的数值" />
                            )
                        }
                    </Form.Item>

                    <Form.Item
                        label="目标值"
                    >
                        {
                            getFieldDecorator('target', {
                                rules: [
                                    { required: true, message: '请输入目标值!' }
                                ],
                            })(
                                <InputNumber placeholder="请输入目标值" />
                            )
                        }
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'center' }}>
                    <Button type="primary" onClick={this.query}>
                        插入
                </Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(Content3)