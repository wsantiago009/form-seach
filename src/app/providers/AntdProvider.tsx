'use client'

import { ConfigProvider, DatePicker } from 'antd'
import { ReactNode } from 'react'

export default function AntdProvider({ children }: { children: ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#8b5cf6',
                    colorBorder: '#e5e7eb',
                    borderRadius: 8,
                    controlHeight: 44,
                    fontSize: 16,
                    colorText: '#1F2A37',
                },
                components: {
                    Button: {
                        colorPrimary: '#7749EF',
                        colorPrimaryHover: '#5C27E5',
                        colorPrimaryActive: '#5C27E5',
                        fontWeight: 500,
                        borderRadius: 8,
                    },
                    Input: {
                        colorBorder: '#e5e7eb',
                        hoverBorderColor: '#e5e7eb',
                        colorBgContainer: ' #F3F4F6',
                        hoverBg: '#E5E7EB',
                    },
                    InputNumber: {
                        colorBorder: '#e5e7eb',
                        hoverBorderColor: '#e5e7eb',
                        colorBgContainer: ' #F3F4F6',
                        hoverBg: '#E5E7EB',
                    },
                    DatePicker: {
                        colorBorder: '#e5e7eb',
                        hoverBorderColor: '#e5e7eb',
                        colorBgContainer: ' #F3F4F6',
                        hoverBg: '#E5E7EB',
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}
