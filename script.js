// وظيفة التنقل بين الصفحات
function showSec(id, btn) {
    document.querySelectorAll('.sec').forEach(s => s.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
    
    document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
}

// الانتقال لسكشن معين من الهوم
function gotoSection(id) {
    const navBtn = document.querySelector(`button[onclick*="'${id}'"]`);
    showSec(id, navBtn);
}

// دالة توليد كرت جهاز/طاولة
function createCard(prefix, index) {
    return `
        <div class="tc">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="tc-num">${prefix}${index}</span>
                <span class="sbadge sb-free">متاح</span>
            </div>
            <div class="tc-disp">00:00</div>
            <button class="tb">بدء الوقت</button>
        </div>`;
}

// عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    // 1. توليد طاولات البلياردو (2)
    const poolGrid = document.getElementById('pool-grid');
    for(let i=1; i<=2; i++) poolGrid.innerHTML += createCard('Table ', i);

    // 2. توليد أجهزة البلي ستيشن (7)
    const psGrid = document.getElementById('ps-grid');
    for(let i=1; i<=7; i++) psGrid.innerHTML += createCard('PS ', i);

    // 3. توليد الحاسبات (8)
    const pcGrid = document.getElementById('pc-grid');
    for(let i=1; i<=8; i++) pcGrid.innerHTML += createCard('PC ', i);

    // 4. توليد المنيو
    const menuGrid = document.getElementById('menu-grid');
    const items = [
        {name: 'برجر لحم', price: '5,000', icon: '🍔'},
        {name: 'بيتزا كلاسيك', price: '7,000', icon: '🍕'},
        {name: 'قهوة اسبريسو', price: '2,000', icon: '☕'},
        {name: 'كولا بارد', price: '1,000', icon: '🥤'},
        {name: 'أندومي سبيشال', price: '2,500', icon: '🍜'},
        {name: 'شاي عراقي', price: '1,000', icon: '🍵'}
    ];

    items.forEach(item => {
        menuGrid.innerHTML += `
            <div class="mpcard">
                <span class="mpcard-icon">${item.icon}</span>
                <div style="margin-bottom:8px;">${item.name}</div>
                <div class="mpcard-price">${item.price} د.ع</div>
            </div>`;
    });
});
