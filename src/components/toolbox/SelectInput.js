import React from 'react';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
    return (
        <div className='form-group mt-2'>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={onChange} className="form-control">
                <option value="" key="">
                    {defaultOption}
                </option>
                {
                    options.map((option) => {
                        return (
                            <option value={option.value} key={option.value}>
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default SelectInput;
