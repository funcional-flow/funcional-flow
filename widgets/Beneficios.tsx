"use client";
import * as motion from "motion/react-client";
import CardFlow from "../components/CardFlow";

export default function Beneficios() {
  return (
    <div className="mx-2">
      <h2 className="font-semibold text-2xl mb-4">Benefícios</h2>
      <CardFlow />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "var(--primary)",
  borderRadius: "50%",
};
