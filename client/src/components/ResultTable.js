import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
            <tr className='table-body' key={`key`}>
                            <td>Mert</td>
                            <td>5</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                
            </tbody>
        </table>
    </div>
  )
}
