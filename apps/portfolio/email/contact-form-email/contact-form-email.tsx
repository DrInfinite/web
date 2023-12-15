import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

/* eslint-disable-next-line */
export interface ContactFormEmailProps {
    message: string;
    senderEmail: string;
}

export function ContactFormEmail(props: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
                            <Heading className="leading-tight">
                                You received the following message from the
                                contact form
                            </Heading>
                            <Text>{props.message}</Text>
                            <Hr />
                            <Text>
                                The sender&apos;s email is: {props.senderEmail}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default ContactFormEmail;