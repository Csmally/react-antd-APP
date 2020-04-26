import React from 'react';
import { Form, Button, Input, InputNumber, Modal } from 'antd'
import getResultIndex from '../../utils/getResultIndex'

class Content1 extends React.Component {
    state = {};
    query = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let result = getResultIndex(values)
                Modal.success({
                    content: '符合您要求的值为第'+(result[0]+1)+'个和第'+(result[1]+1)+'个！',
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
                        label="查询数值"
                    >
                        {
                            getFieldDecorator('nums', {
                                rules: [
                                    { required: true, message: '请输入需要查询的数值!' }
                                ],
                            })(
                                <Input placeholder="请输入需要查询的数值" />
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
                        查询
                    </Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(Content1)