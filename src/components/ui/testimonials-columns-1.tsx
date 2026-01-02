"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div 
                                key={i}
                                className="p-6 rounded-2xl border border-border/50 bg-card shadow-lg shadow-primary/5 w-full max-w-xs"
                            >
                                <p className="text-muted-foreground italic text-sm leading-relaxed">"{text}"</p>
                                <div className="flex items-center gap-4 mt-6">
                                    <img
                                        width={40}
                                        height={40}
                                        src={image}
                                        alt={name}
                                        className="h-10 w-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground">{name}</h4>
                                        <p className="text-xs text-primary font-medium">{role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
