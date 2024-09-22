import useCardForms from '../../hooks/useCardForms'
import CardForm from './CardForm'

export default function NewCardForm() {
    const { isLoading, error, handleCreateCard } = useCardForms()

    return (
        <CardForm
            isLoading={isLoading}
            networkError={error}
            handleSubmit={handleCreateCard}
        />
    )
}
