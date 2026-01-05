'use client';
import React, { useEffect } from 'react';

function Cursor() {
  useEffect(() => {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      if (!hoverAnim) return; // guard against missing element
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      if (!cursor) return; // guard
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    const interactiveEls = document.querySelectorAll('a, .cursor-pointer');
    const handleEnter = () => cursor && cursor.classList.add('cursor-active');
    const handleLeave = () => cursor && cursor.classList.remove('cursor-active');
    interactiveEls.forEach((el) => {
      el.addEventListener('mousemove', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    // cleanup listeners on unmount
    return () => {
      link.forEach((b) => {
        b.removeEventListener('mousemove', animateit);
        b.removeEventListener('mouseleave', animateit);
      });
      window.removeEventListener('mousemove', editCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mousemove', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div className="cursor"></div>;
}

export default Cursor;
