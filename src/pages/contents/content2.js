import React from 'react';
import { Form, Button, Input, InputNumber, Modal } from 'antd'
import changeValues from '../../utils/changeValues'

class Content2 extends React.Component {
    state = {}
    query = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let result = changeValues(values)
                Modal.success({
                    content: '数组去除重复元素结果为：'+result.arr+','+'长度为：'+result.length
                })
            }
        }

        )
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Form>
                    <Form.Item
                        label="需改动数值"
                    >
                        {
                            getFieldDecorator('nums', {
                                rules: [
                                    { required: true, message: '请输入需要修改的数值!' }
                                ],
                            })(
                                <Input placeholder="请输入需要修改的数值" />
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

export default Form.create()(Content2)