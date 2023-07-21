import fs from 'fs'
import path from 'path'
import {withStore} from "@/core/store";
import * as React from "react";
import {Button, Card, Input, Spin} from "antd";
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';

export interface FileProps {
    name: string
    fileName: string
    absolutePath: string
}

export interface DemoState {
    date: string
    type: string
    env: string
    message: string
}

interface DataType {
    key: string;
    bucket: string;
    region: string;
    size: string;
    nums: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: '存储桶',
        dataIndex: 'bucket',
        key: 'bucket',
        render: text => <a>{text}</a>,
    },
    {
        title: '区域',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: '存储容量',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: '对象数量',
        dataIndex: 'nums',
        key: 'nums',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        bucket: 'John Brown',
        region: "北京",
        size: '4.3MB',
        nums: 1024,
    },
    {
        key: '2',
        bucket: 'Jim Green',
        region: "北京",
        size: '1.2GB',
        nums: 1024,
    },
    {
        key: '3',
        bucket: 'Joe Black',
        region: "北京",
        size: '0.2 KB',
        nums: 1024,
    },
];
@withStore(['count', {countAlias: 'count'}])
export default class BucketList extends React.Component<FileProps, DemoState> {


    // 构造函数
    constructor(props: FileProps) {
        super(props)
    }

    componentDidMount(): void {
        console.log(this)
    }

    render(): JSX.Element {

        return (
            <div className="layout-padding">
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }

}

