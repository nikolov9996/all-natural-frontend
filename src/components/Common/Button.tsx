import { Button } from '@mui/material'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const ButtonBase: React.FC<ButtonProps> = ({ title }) => {
    return (
        <Button variant='contained' color='primary'>{title}</Button>
    )
}

export default ButtonBase

