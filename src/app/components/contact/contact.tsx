'use client';

export default function Contact() {
  return (
    <section className="w-full py-16 px-4 text-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations or just a friendly chat!</p>
        <a href="mailto:samuel@example.com" className="inline-block px-6 py-3 bg-rose-500 text-white rounded hover:bg-rose-600 transition">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
