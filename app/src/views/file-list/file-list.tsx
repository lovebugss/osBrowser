import fs from 'fs'
import path from 'path'
import {withStore} from "@/core/store";
import * as React from "react";
import {Button, Card, Input, Spin} from "antd";

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

@withStore(['count', {countAlias: 'count'}])
export default class FileList extends React.Component<FileProps, DemoState> {


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

            </div>
        )
    }

}

