import React from 'react'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button
}

export const OulinedButton = () => <Button outline={true} />

export const NotOulinedButton = () => <Button outline={false} />
