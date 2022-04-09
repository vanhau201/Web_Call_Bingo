import React, { useEffect, useState } from 'react'
import "../body/Body.css"
import Chessman from '../chessman/Chessman'
import Dialog from '../dialog/Dialog'

const Body = () => {

    const [play, setPlay] = useState(false)
    const [hidenButton, setHidenButton] = useState(false)
    const [numbersCurrent, setNumbersCurrent] = useState()
    const [listNumbers, setListNumbers] = useState([])
    const [openDialog, setOpenDialog] = useState({
        message: "",
        status: false
    })
    const [music, setMusic] = useState(1)

    const time_music1 = {
        1: 31, 2: 49.3, 3: 69, 4: 108.2, 5: 124.2, 6: 144, 7: 175, 8: 196, 9: 212,
        10: 228, 11: 248, 12: 271, 13: 302, 14: 344, 15: 363, 16: 427, 17: 445.5, 18: 461, 19: 497,
        20: 527, 21: 559.8, 22: 581, 23: 609, 24: 642, 25: 677.2, 26: 698, 27: 725, 28: 744.5, 29: 764,
        30: 797, 31: 819, 32: 845, 33: 872, 34: 893, 35: 929, 36: 952, 37: 972.7, 38: 989, 39: 1015,
        40: 1036.6, 41: 1066, 42: 1084, 43: 1118, 44: 1140, 45: 1168, 46: 1189, 47: 1219.7, 48: 1244, 49: 1263,
        50: 1285, 51: 1304.3, 52: 1321, 53: 1344, 54: 1382, 55: 1415, 56: 1444, 57: 1473.6, 58: 1486, 59: 1508.8,
        60: 1530, 61: 1544, 62: 1560, 63: 1582.5, 64: 1603, 65: 1627, 66: 1642, 67: 1691.2, 68: 1707, 69: 1721.3,
        70: 1757, 71: 1772.7, 72: 1795, 73: 1829, 74: 1850.4, 75: 1869, 76: 1894, 77: 1931, 78: 1954, 79: 1969,
        80: 2006, 81: 2045, 82: 2071, 83: 2087, 84: 2125.5, 85: 2151.4, 86: 2177, 87: 2217, 88: 2228.6, 89: 2245.8,
        90: 2271.5, 91: 2296
    }
    const time_music2 = {
        1: 19, 2: 38, 3: 74.5, 4: 98.7, 5: 127, 6: 156, 7: 177, 8: 199, 9: 227,
        10: 248.2, 11: 269, 12: 300.4, 13: 327, 14: 354, 15: 379, 16: 416, 17: 446, 18: 487.7, 19: 515,
        20: 530, 21: 565, 22: 578, 23: 611.5, 24: 642, 25: 680.7, 26: 740, 27: 763.7, 28: 782, 29: 808,
        30: 833.8, 31: 851.5, 32: 912, 33: 925, 34: 962, 35: 992, 36: 1015.1, 37: 1036.5, 38: 1096.5, 39: 1131,
        40: 1166, 41: 1211.4, 42: 1250.5, 43: 1281.8, 44: 1308.5, 45: 1349.5, 46: 1388, 47: 1421.8, 48: 1466, 49: 1506,
        50: 1563.2, 51: 1595, 52: 1653.5, 53: 1675, 54: 1721, 55: 1762.7, 56: 1807, 57: 1842, 58: 1908, 59: 1942.5,
        60: 1976.5, 61: 2041, 62: 2083.5, 63: 2123.4, 64: 2176.5, 65: 2207, 66: 2237, 67: 2266.5, 68: 2315.5, 69: 2353,
        70: 2383.5, 71: 2428, 72: 2453, 73: 2491, 74: 2530, 75: 2563.7, 76: 2591.4, 77: 2615, 78: 2635.5, 79: 2660,
        80: 2686, 81: 2739, 82: 2762.5, 83: 2811.5, 84: 2834.5, 85: 2882.5, 86: 2919, 87: 2958.5, 88: 3019, 89: 3075.5,
        90: 3115.5, 91: 3164.2
    }

    const colors = [
        "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000",
        "#808000", "#008000", "#800080", "#008080", "#000080", "#8B4513", "#CD853F", "#8470FF", "#0000EE", "#00688B",
        "#6CA6CD", "#00CD66", "#FFD700", "#8B658B", "#CD5555", "#B22222", "#FF4040", "#EE9A00", "# FF7F50", "#FF1493",
        "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000",
        "#808000", "#008000", "#800080", "#008080", "#000080", "#8B4513", "#CD853F", "#8470FF", "#0000EE", "#00688B",
        "#6CA6CD", "#00CD66", "#FFD700", "#8B658B", "#CD5555", "#B22222", "#FF4040", "#EE9A00", "# FF7F50", "#FF1493",
        "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000",
        "#808000", "#008000", "#800080", "#008080", "#000080", "#8B4513", "#CD853F", "#8470FF", "#0000EE", "#00688B",
        "#6CA6CD", "#00CD66", "#FFD700", "#8B658B", "#CD5555", "#B22222", "#FF4040", "#EE9A00", "# FF7F50", "#FF1493"
    ]

    // random số lô tô
    const randomNumbers = () => {
        let numbers
        do {
            numbers = Math.floor(Math.random() * 90) + 1

            if (!listNumbers.includes(numbers)) {
                return numbers
            }

        } while (listNumbers.includes(numbers) && listNumbers.length < 90)

    }

    useEffect(() => {
        let audio = document.getElementById("myAudio");
        let endTime
        let time
        let deplay
        if (music === 1) {
            endTime = time_music1[1]
            time = time_music1
            audio.src = "../assets/loto01.mp3"
            deplay = 3
        }
        else if (music === 2) {
            endTime = time_music2[1]
            time = time_music2
            audio.src = "https://vnso-zn-15-tf-mp3-s1-zmp3.zmdcdn.me/678d6d3e087ae124b86b/1908856412155800278?authen=exp=1649657351~acl=/678d6d3e087ae124b86b/*~hmac=7ccd3a43b19ce3b3e5b280e3f7104e2b&fs=MTY0OTQ4NDU1MTk4OHx3ZWJWNnwxMDEwNzkyNzmUsIC1fDE0LjIzNC4xMDUdUngMjEw"
            deplay = 4
        }

        let numbers_random
        const handlePlayMusic = () => {
            if (numbers_random && endTime - audio.currentTime <= deplay) {
                if (!listNumbers.includes(numbers_random)) {
                    listNumbers.unshift(numbers_random)
                    setNumbersCurrent(numbers_random)
                }
            }
            if (audio.currentTime >= endTime) {

                numbers_random = randomNumbers()
                if (numbers_random) {
                    audio.currentTime = time[numbers_random]
                    endTime = time[numbers_random + 1]
                }
                else {
                    audio.pause()
                    document.getElementById("btnPause").setAttribute("disabled", true)
                }
            }
        }
        if (hidenButton) {

            audio.play()
            document.getElementById("select__music").setAttribute("disabled", true)
            audio.addEventListener("timeupdate", handlePlayMusic, false);
        }

        // remove event (cleanup function)
        return () => {
            audio.removeEventListener("timeupdate", handlePlayMusic)
        }

    }, [hidenButton])

    // event bắt đầu chơi
    const handleStart = () => {
        setPlay(!play)
        setHidenButton(true)
    }

    // event pause/start
    const handlePause = () => {

        let audio = document.getElementById("myAudio");
        if (play) {
            audio.pause()
            setPlay(!play)
        }
        else {
            audio.play()
            setPlay(!play)
        }
    }

    // event chơi lại từ đầu
    const handleReturn = () => {
        setOpenDialog({
            message: "Bạn có chắc muốn chơi lại không ?",
            status: true
        })

    }

    // xác nhận chơi lại
    const onHandleConfirm = (status) => {
        if (status) {
            let audio = document.getElementById("myAudio");
            audio.pause()
            audio.currentTime = 0
            document.getElementById("btnPause").removeAttribute("disabled")
            document.getElementById("select__music").removeAttribute("disabled")
            setHidenButton(!hidenButton)
            setListNumbers([])
            setNumbersCurrent(null)
            setOpenDialog({
                message: "",
                status: false
            })
            setPlay(false)

        }
        else {
            setOpenDialog({
                message: "Bạn có chắc muốn chơi lại không ?",
                status: false
            })
        }
    }

    // select chọn nhạc
    const handleSelect = (e) => {
        setMusic(parseInt(e.target.value))
    }

    return (
        <div className='main'>
            <audio id="myAudio" />
            <div className='container'>
                <div className='row main__top'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='main__select'>
                            <label htmlFor=""> Chọn nhạc: </label>
                            <select name="" id="select__music" onChange={handleSelect}>
                                <option value="1">Lô tô Ngọc Nam</option>
                                <option value="2">Lô tô Sao Đêm</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='main__curent-number'>
                            <span>Số vừa kêu</span>
                            <p>{numbersCurrent ? numbersCurrent : "?"}</p>
                        </div>

                    </div>
                </div>

                <div className='main__center'>
                    <div className='main__center-title'>
                        <h2>Các số đã kêu</h2>
                    </div>
                    <div className='main__center-container'>
                        <div className='main__center-chessman'>
                            {
                                listNumbers && listNumbers.map((n, i) => <Chessman key={i} numbers={n}
                                    color={colors[n]} />)
                            }

                        </div>
                    </div>
                </div>

                <div className='main__bottom'>
                    <div className='main__bottom-button'>
                        {
                            !hidenButton ? <button onClick={handleStart}>Bắt đầu</button> :
                                <>
                                    <button id="btnPause" onClick={handlePause}>
                                        {play ? "Tạm dừng" : "Chơi tiếp"}
                                    </button>
                                    <button onClick={handleReturn}>Chơi lại</button>
                                </>
                        }

                    </div>
                </div>

            </div>

            {
                openDialog.status && <Dialog massage={openDialog.message} handleConfirm={onHandleConfirm} />
            }

        </div>
    )
}

export default Body