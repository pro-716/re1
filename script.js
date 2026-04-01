/**
 * وظيفة التنقل بين الأقسام
 * @param {string} sectionId - معرف القسم المراد إظهاره
 * @param {HTMLElement} btn - الزر الذي تم الضغط عليه
 */
function showSec(sectionId, btn) {
    // 1. إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.sec');
    sections.forEach(sec => {
        sec.classList.remove('visible');
    });

    // 2. إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('visible');
    }

    // 3. تحديث حالة الأزرار في القائمة
    const buttons = document.querySelectorAll('.nb');
    buttons.forEach(b => {
        b.classList.remove('active');
    });

    // إذا تم استدعاء الوظيفة عن طريق زر، نفعله
    if (btn) {
        btn.classList.add('active');
    }
}

/**
 * وظيفة للانتقال لقسم معين من خلال الكروت في الصفحة الرئيسية
 * @param {string} sectionId 
 */
function gotoSection(sectionId) {
    // البحث عن الزر المطابق في النافبار لتحديث شكله
    const navBtn = document.querySelector(`button[onclick*="'${sectionId}'"]`);
    showSec(sectionId, navBtn);
}

// تشغيل بعض التأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    console.log("RESPAWN Dashboard Ready Center...");
});
