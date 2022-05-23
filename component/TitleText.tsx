import { Text } from 'react-native';

type TitleTextProps = {
    title: string;
    text: string;
}

const TitleText = (props: TitleTextProps) => {
    const {title, text} = props;

    return (
        <>
            <Text>Le titre en props : {title}</Text>
            <Text>...et le texte en props : {text}</Text>
        </>
    );
}

export default TitleText;