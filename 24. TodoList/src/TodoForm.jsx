import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material'
import { Create } from '@mui/icons-material'
import { useState } from 'react'

export default function TodoForm({ addTodo }) {

    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('')
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end" type='submit'>
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                    }}

                />
            </form>
        </ListItem>
    )
}