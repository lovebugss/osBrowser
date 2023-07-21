import * as React from 'react'
import {ConfigProvider, Spin} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import {AppRouter, AppLayout, Loader} from '@/src/components'
import Login from '@/src/views/login/login'

import routes from './auto-routes'

interface AppProps {
    createConfig: CreateConfig
}

Spin.setDefaultIndicator(<Loader/>)

const hasLogin = () => {
    return true;
}

export default class App extends React.Component<AppProps> {
    render(): JSX.Element {
        return (
            <ConfigProvider locale={zhCN}>
                {hasLogin() ?
                    (<AppLayout createConfig={this.props.createConfig}>
                        <AppRouter routes={routes} store={$store}/>
                    </AppLayout>)
                    :
                    (<Login/>)}

            </ConfigProvider>
        )
    }
}
