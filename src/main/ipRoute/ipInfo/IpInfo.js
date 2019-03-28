import React from 'react'


function IpInfoRow(props){
    return <tr>
        <td>{props.label}: </td>
        <td>{props.dataValue}</td>
    </tr>
}

function IpInfo(props){
    if(props.info){
        return <table>
            <tbody>
                {Object.keys(props.info).map((key) => {
                    const value = props.info[key]
                    return <IpInfoRow key={key} label={key} dataValue={value}/>
                })}
            </tbody>
        </table>
    }
    return <div>No location data found</div>

}

export default IpInfo
