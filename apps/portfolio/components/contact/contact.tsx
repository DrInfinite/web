'use client';

import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { SectionHeading, SubmitBtn } from '..';
import { sendEmail } from '../../actions/send-email';
import { useSectionInView } from '../../lib/hooks';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at{' '}
                <a
                    className="underline"
                    href="mailto:work.naparajith@gmail.com"
                >
                    work.naparajith@gmail.com
                </a>{' '}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success('Email sent successfully!');
                }}
            >
                <input
                    className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}

export default Contact;
