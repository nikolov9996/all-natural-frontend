import { useNavigate } from "react-router-dom"

const useProductCard = () => {
    const navigate = useNavigate()

    const navigateToDetails = (id: string) => {
        navigate(`/product/${id}`);
    }

    return {
        navigateToDetails
    }

}

export default useProductCard