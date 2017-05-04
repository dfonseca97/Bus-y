import React, { Component, } from 'react'
import { View, } from 'react-native'

export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}
