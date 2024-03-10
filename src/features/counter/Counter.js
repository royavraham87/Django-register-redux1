import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    selectCount, increment3, reduce2
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div style={{backgroundColor:"gray"}}>
            <div className={styles.row}>
                <span className={styles.value}>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
                <span className={styles.value}>{count}</span>
                <button onClick={() => dispatch(increment3())}>+++</button>
                <button onClick={() => dispatch(reduce2())}>--</button>
            </div>
        </div>
    );
}