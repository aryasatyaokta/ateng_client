import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

// Post - Test
export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length
}

export function earnPoints_Number(result, answer, point) {
    return result.map((element, i) => answer[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}


export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints;
}

export function CheckUserExist({children}) {
    const auth = useSelector(state => state.result.userId)

    return auth ? children : <Navigate to={"/quiz_setup_posttest"} replace={true}></Navigate>
}

export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}

export async function postServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

// Pre - Test
export function attempts_NumberPretest(result) {
    return result.filter(r => r !== undefined).length
}

export function earnPoints_NumberPretest(result, answer, point) {
    return result.map((element, i) => answer[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResultPretest(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints;
}

export function CheckUserExistPretest({children}) {
    const auth = useSelector(state => state.resultPretest.userIdPretest)

    return auth ? children : <Navigate to={"/quiz_setup_pretest"} replace={true}></Navigate>
}


export async function getServerDataPretest(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


export async function postServerDataPretest(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}