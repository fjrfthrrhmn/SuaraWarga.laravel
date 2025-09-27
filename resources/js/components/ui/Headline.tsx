import React from 'react'
import Typography from './typography'

interface HeadlineProps {
    text: string
    description: string
    span?: string
    children?: React.ReactNode
}

export const Headline = ({ ...props }: HeadlineProps) => {
    const { children, description, span, text } = props

    const parts = text?.split(",") ?? []

    return (
        <>
            <div className='space-y-4 py-12'>
                <div className="space-y-2">
                    <Typography.Text variant='sm/normal'>{span}</Typography.Text>

                    <Typography.Title variant='2/extrabold'>
                        {parts.map((part, idx) => (
                            <span key={idx}>
                                {part.trim()}
                                {idx < parts.length - 1 && <br />}
                            </span>
                        ))}</Typography.Title>
                    <Typography.Text>{description}</Typography.Text>
                </div>
                {children}
            </div>
        </>
    )
}