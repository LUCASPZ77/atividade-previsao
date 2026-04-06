const MONTHS = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

// 1. BASE DE DADOS COMPLETA
const EXERCISES_DATABASE = [
    // PEITO (1-10)
    { id: 1, cat: "Peito", name: "Supino Reto Barra", target: "Peitoral Maior", desc: "Clássico para massa bruta.", tip: "Ponte leve com a coluna." },
    { id: 2, cat: "Peito", name: "Supino Inclinado Halteres", target: "Peitoral Superior", desc: "Foco na parte de cima do peito.", tip: "Não encoste os halteres." },
    { id: 3, cat: "Peito", name: "Crucifixo Reto", target: "Peitoral", desc: "Isolamento total.", tip: "Cotovelos levemente flexionados." },
    { id: 4, cat: "Peito", name: "Crossover Polia Alta", target: "Peitoral Inferior", desc: "Definição do miolo e base.", tip: "Esmague no final do movimento." },
    { id: 5, cat: "Peito", name: "Supino Declinado", target: "Peitoral Inferior", desc: "Foco na base do peito.", tip: "Cuidado com o rosto na barra." },
    { id: 6, cat: "Peito", name: "Flexão de Braços", target: "Peitoral Geral", desc: "Básico e funcional.", tip: "Mantenha o core rígido." },
    { id: 7, cat: "Peito", name: "Chest Press Máquina", target: "Peitoral", desc: "Segurança e carga alta.", tip: "Ajuste o banco na altura do peito." },
    { id: 8, cat: "Peito", name: "Peck Deck (Voador)", target: "Estrias do Peito", desc: "Isolamento mecânico.", tip: "Não deixe o peso bater." },
    { id: 9, cat: "Peito", name: "Supino Reto Halteres", target: "Estabilizadores", desc: "Maior amplitude que a barra.", tip: "Desça até sentir alongar." },
    { id: 10, cat: "Peito", name: "Pull Over", target: "Peitoral/Serrátil", desc: "Expansão da caixa torácica.", tip: "Mantenha os braços quase retos." },
    // COSTAS (11-20)
    { id: 11, cat: "Costas", name: "Puxada Alta (Pulley)", target: "Dorsais (Largura)", desc: "Puxe para o peito.", tip: "Não balance o tronco." },
    { id: 12, cat: "Costas", name: "Remada Curvada Barra", target: "Dorsais (Espessura)", desc: "Puxada explosiva.", tip: "Coluna 45 graus sempre reta." },
    { id: 13, cat: "Costas", name: "Barra Fixa (Pull Up)", target: "Dorsais", desc: "O rei das costas largas.", tip: "Puxe até o queixo passar a barra." },
    { id: 14, cat: "Costas", name: "Remada Unilateral (Serrote)", target: "Grande Dorsal", desc: "Foco individual por lado.", tip: "Puxe o haltere em direção ao quadril." },
    { id: 15, cat: "Costas", name: "Levantamento Terra", target: "Cadeia Posterior", desc: "Força bruta total.", tip: "Barra colada na canela." },
    { id: 16, cat: "Costas", name: "Remada Baixa Triângulo", target: "Miolo das Costas", desc: "Puxada horizontal.", tip: "Aproxime as escápulas no final." },
    { id: 17, cat: "Costas", name: "Pulldown Corda", target: "Lats (Isolamento)", desc: "Braços estendidos.", tip: "Sinta o lats puxar, não o tríceps." },
    { id: 18, cat: "Costas", name: "Remada Cavalinho", target: "Espessura Total", desc: "Cargas extremas.", tip: "Peito aberto e joelhos flexionados." },
    { id: 19, cat: "Costas", name: "Lombar (Hiperextensão)", target: "Eretores da Espinha", desc: "Proteção da coluna.", tip: "Não ultrapasse a linha reta." },
    { id: 20, cat: "Costas", name: "Puxada Triângulo", target: "Lats Inferiores", desc: "Pegada fechada.", tip: "Leve o triângulo no peito inferior." },
    // PERNAS (21-35)
    { id: 21, cat: "Pernas", name: "Agachamento Livre", target: "Quadríceps/Glúteo", desc: "O construtor de monstros.", tip: "Quebre a paralela (90 graus)." },
    { id: 22, cat: "Pernas", name: "Leg Press 45", target: "Quadríceps", desc: "Pressão total nas pernas.", tip: "Não trave os joelhos no topo." },
    { id: 23, cat: "Pernas", name: "Extensora", target: "Quadríceps (Isolado)", desc: "Foco no desenho da coxa.", tip: "Pico de contração de 1 seg." },
    { id: 24, cat: "Pernas", name: "Flexora Deitado", target: "Isquiotibiais", desc: "Posterior de coxa.", tip: "Mantenha o quadril colado no banco." },
    { id: 25, cat: "Pernas", name: "Stiff Barra", target: "Posterior/Glúteo", desc: "Alongamento máximo.", tip: "Desça a barra rente às pernas." },
    { id: 26, cat: "Pernas", name: "Afundo/Passada", target: "Glúteo/Perna", desc: "Equilíbrio e potência.", tip: "Passo largo para focar em glúteo." },
    { id: 27, cat: "Pernas", name: "Hack Squat", target: "Quadríceps Exterior", desc: "Padrão de agachamento fixo.", tip: "Pés baixos na plataforma focam quadríceps." },
    { id: 28, cat: "Pernas", name: "Cadeira Abdutora", target: "Glúteo Médio", desc: "Lateral do quadril.", tip: "Incline o tronco para frente." },
    { id: 29, cat: "Pernas", name: "Cadeira Adutora", target: "Interno de Coxa", desc: "Miolo da perna.", tip: "Movimento controlado." },
    { id: 30, cat: "Pernas", name: "Elevação Pélvica", target: "Glúteo Máximo", desc: "O melhor para glúteos.", tip: "Esmague em cima." },
    { id: 31, cat: "Pernas", name: "Panturrilha em Pé", target: "Gastrocnêmio", desc: "Massa da batata da perna.", tip: "Alongue tudo embaixo." },
    { id: 32, cat: "Pernas", name: "Panturrilha Sentado", target: "Sólleo", desc: "Largura da panturrilha.", tip: "Frequência alta de reps." },
    { id: 33, cat: "Pernas", name: "Agachamento Sumô", target: "Adutores/Glúteo", desc: "Base aberta.", tip: "Joelhos apontando para fora." },
    { id: 34, cat: "Pernas", name: "Flexora Sentado", target: "Isquiotibiais", desc: "Isolamento sentado.", tip: "Puxe com força e solte devagar." },
    { id: 35, cat: "Pernas", name: "Sissy Squat", target: "Quadríceps (Gota)", desc: "Foco no vasto medial.", tip: "Use o apoio para segurança." },
    // OMBROS (36-45)
    { id: 36, cat: "Ombros", name: "Desenvolvimento Militar", target: "Deltóide Anterior", desc: "Ombros de titã.", tip: "Trave o core." },
    { id: 37, cat: "Ombros", name: "Elevação Lateral Halteres", target: "Deltóide Lateral", desc: "Largura dos ombros.", tip: "Pense em empurrar para os lados." },
    { id: 38, cat: "Ombros", name: "Elevação Frontal", target: "Deltóide Anterior", desc: "Frente do ombro.", tip: "Não ultrapasse a linha dos olhos." },
    { id: 39, cat: "Ombros", name: "Crucifixo Inverso", target: "Deltóide Posterior", desc: "Postura e detalhe.", tip: "Não use o trapézio." },
    { id: 40, cat: "Ombros", name: "Arnold Press", target: "Deltóide Total", desc: "Rotação de 180 graus.", tip: "Movimento fluido." },
    { id: 41, cat: "Ombros", name: "Remada Alta Polia", target: "Deltóide/Trapézio", desc: "Foco em trapézio superior.", tip: "Cotovelos acima dos punhos." },
    { id: 42, cat: "Ombros", name: "Encolhimento Barra", target: "Trapézio Superior", desc: "Pescoço de touro.", tip: "Apenas suba, não gire os ombros." },
    { id: 43, cat: "Ombros", name: "Face Pull Corda", target: "Posterior/Manguito", desc: "Saúde do ombro.", tip: "Puxe a corda na altura da testa." },
    { id: 44, cat: "Ombros", name: "Elevação Lateral Polia", target: "Deltóide Lateral", desc: "Tensão constante.", tip: "Passe o cabo por trás das pernas." },
    { id: 45, cat: "Ombros", name: "Desenvolvimento Halteres", target: "Deltóide Anterior", desc: "Estabilidade e carga.", tip: "Encoste levemente em cima." },
    // BÍCEPS (46-50)
    { id: 46, cat: "Bíceps", name: "Rosca Direta Barra W", target: "Bíceps (Massa)", desc: "O clássico.", tip: "Não balance os cotovelos." },
    { id: 47, cat: "Bíceps", name: "Rosca Alternada", target: "Braquial/Bíceps", desc: "Supinação no topo.", tip: "Gire o punho para fora." },
    { id: 48, cat: "Bíceps", name: "Rosca Martelo", target: "Braquiorradial", desc: "Largura do braço.", tip: "Pegada neutra." },
    { id: 49, cat: "Bíceps", name: "Rosca Scott", target: "Pico do Bíceps", desc: "Isolamento total.", tip: "Não estenda 100% para proteger o tendão." },
    { id: 50, cat: "Bíceps", name: "Rosca Concentrada", target: "Bíceps Isolado", desc: "Desenho e pico.", tip: "Cotovelo na parte interna da coxa." },
    // TRÍCEPS (51-57)
    { id: 51, cat: "Tríceps", name: "Tríceps Testa Barra W", target: "Cabeça Longa", desc: "Massa do tríceps.", tip: "Leve a barra até a testa." },
    { id: 52, cat: "Tríceps", name: "Tríceps Corda Polia", target: "Cabeça Lateral", desc: "Definição 'ferradura'.", tip: "Abra a corda embaixo." },
    { id: 53, cat: "Tríceps", name: "Tríceps Pulley Barra", target: "Tríceps Geral", desc: "Carga e explosão.", tip: "Mantenha o corpo fixo." },
    { id: 54, cat: "Tríceps", name: "Tríceps Francês Halter", target: "Cabeça Longa", desc: "Alongamento máximo.", tip: "Mantenha os cotovelos fechados." },
    { id: 55, cat: "Tríceps", name: "Mergulho Paralelas", target: "Tríceps/Peito", desc: "Peso do corpo.", tip: "Corpo reto foca tríceps." },
    { id: 56, cat: "Tríceps", name: "Supino Fechado", target: "Tríceps (Carga)", desc: "Poder de empurrar.", tip: "Mãos na largura dos ombros." },
    { id: 57, cat: "Tríceps", name: "Coice Halter", target: "Tríceps (Detalhe)", desc: "Fim do treino.", tip: "Estenda totalmente o braço." },
    // ABDÔMEN E CORE (61-70)
    { id: 61, cat: "Abdômen", name: "Abdominal Supra", target: "Reto Abdominal", desc: "Parte superior.", tip: "Não puxe o pescoço." },
    { id: 62, cat: "Abdômen", name: "Elevação de Pernas", target: "Abdomen Inferior", desc: "Pochete.", tip: "Não encoste os pés no chão." },
    { id: 63, cat: "Abdômen", name: "Prancha Isométrica", target: "Core/Estabilidade", desc: "Resistência.", tip: "Corpo como uma tábua." },
    { id: 64, cat: "Abdômen", name: "Abdominal Infra no Banco", target: "Inferior", desc: "Foco em infra.", tip: "Suba o quadril levemente." },
    { id: 65, cat: "Abdômen", name: "Roda Abdominal", target: "Core Total", desc: "Nível avançado.", tip: "Não deixe a lombar selar." },
    { id: 68, cat: "Abdômen", name: "Vacuum", target: "Transverso", desc: "Cintura fina.", tip: "Solte todo o ar e sugue o umbigo." }
];

// 2. METODOLOGIAS PROFISSIONAIS
const METHODOLOGIES_DATABASE = [
    { name: "Low Volume (Heavy Duty)", desc: "Intensidade máxima até a falha total.", protocol: "2 sets x 6-8 reps", color: "#ff4500" },
    { name: "High Volume (Volume Alemão)", desc: "Grande quantidade de séries para hipertrofia.", protocol: "10 sets x 10 reps", color: "#adff2f" },
    { name: "Powerlifting (Força Pura)", desc: "Foco nos grandes levantamentos e carga.", protocol: "5 sets x 3-5 reps", color: "#ffffff" },
    { name: "Padrão (Hipertrofia)", desc: "O equilíbrio perfeito para ganho de massa.", protocol: "4 sets x 12 reps", color: "#adff2f" }
];

let currentUser = null;
let evolutionStore = JSON.parse(localStorage.getItem('z_freak_evolution_v3')) || { bench: [], mass: [] };

// AUTH & NAVIGATION
function toggleAuth() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('setup-form').classList.toggle('hidden');
}

function handleLogin() {
    const email = document.getElementById('auth-email').value;
    if(email.length > 5) {
        const saved = JSON.parse(localStorage.getItem('z_freak_user'));
        if(saved) startApp(saved);
        else { alert("Usuário não encontrado!"); toggleAuth(); }
    } else alert("Insira um e-mail");
}

document.getElementById('main-setup').onsubmit = function(e) {
    e.preventDefault();
    const user = { 
        name: document.getElementById('name').value, 
        goal: document.getElementById('goal').value, 
        freq: parseInt(document.getElementById('freq').value),
        weight: parseFloat(document.getElementById('weight').value),
        height: parseFloat(document.getElementById('height').value),
        age: parseInt(document.getElementById('age').value)
    };
    localStorage.setItem('z_freak_user', JSON.stringify(user));
    startApp(user);
};

function changeTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
    window.scrollTo(0,0);
}

// CORE SYSTEM FUNCTIONS
function startApp(user) {
    currentUser = user;
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('display-name').innerText = user.name.toUpperCase();
    document.getElementById('display-goal').innerText = user.goal.toUpperCase();
    
    // Preenche selects de exercícios
    const options = EXERCISES_DATABASE.sort((a,b) => a.name.localeCompare(b.name))
                    .map(ex => `<option value="${ex.name}">${ex.name}</option>`).join('');
    document.getElementById('log-exercise').innerHTML = options;
    document.getElementById('filter-chart-exercise').innerHTML = options;

    injectAcademyTab(); // Injeta a aba nova
    generateStructuredWorkout(user); // Gera o treino profissional
    renderWiki(); 
    renderCharts();
    calculateDiet(user);
}

function calculateDiet(user) {
    let bmr = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5;
    let tdee = bmr * 1.55; 
    let calories, p, c, f;
    
    if(user.goal === 'hipertrofia') { calories = tdee + 400; p = user.weight * 2.2; f = user.weight * 0.9; }
    else if(user.goal === 'cutting') { calories = tdee - 500; p = user.weight * 2.4; f = user.weight * 0.7; }
    else { calories = tdee + 200; p = user.weight * 2.0; f = user.weight * 1.0; }
    c = (calories - (p*4) - (f*9)) / 4;

    document.getElementById('d-cal').innerText = Math.round(calories);
    document.getElementById('d-prot').innerText = Math.round(p);
    document.getElementById('d-carb').innerText = Math.round(c);
    document.getElementById('d-fat').innerText = Math.round(f);

    document.getElementById('meal-plan').innerHTML = `
        • <b>Café:</b> Ovos mexidos, aveia e fruta.<br>
        • <b>Almoço:</b> Arroz/Batata, 150g+ Proteína e Vegetais.<br>
        • <b>Jantar:</b> Proteína magra, legumes e gordura boa.
    `;
}

// --- AS NOVAS FUNÇÕES PROFISSIONAIS ABAIXO ---

function injectAcademyTab() {
    const bottomBar = document.querySelector('.bottom-bar');
    if (!document.getElementById('btn-academy')) {
        const btn = document.createElement('div');
        btn.className = "nav-btn";
        btn.id = "btn-academy";
        btn.innerHTML = '<i class="fas fa-graduation-cap"></i>';
        btn.onclick = () => changeTab('tab-academy', btn);
        bottomBar.appendChild(btn);
    }
    const dashboard = document.getElementById('dashboard');
    if (!document.getElementById('tab-academy')) {
        const tab = document.createElement('section');
        tab.id = 'tab-academy';
        tab.className = 'tab-content';
        tab.innerHTML = `<h2 style="font-family:'Orbitron'; margin-bottom: 20px; color: var(--primary);">FREAK ACADEMY</h2><div id="render-academy" class="workout-grid"></div>`;
        dashboard.appendChild(tab);
    }
    document.getElementById('render-academy').innerHTML = METHODOLOGIES_DATABASE.map(m => `
        <div class="lib-card" style="border-left: 4px solid ${m.color}">
            <h3 style="color:${m.color}; font-family:'Orbitron'">${m.name}</h3>
            <p style="margin: 10px 0; font-size:0.9rem;">${m.desc}</p>
            <strong>Protocolo: ${m.protocol}</strong>
        </div>`).join('');
}

function generateStructuredWorkout(user) {
    const container = document.getElementById('render-workout');
    container.innerHTML = "";
    const getById = (id) => EXERCISES_DATABASE.find(e => e.id === id);
    
    // Define metodologia por objetivo
    let method = METHODOLOGIES_DATABASE[3]; // Padrão
    if(user.goal === 'hipertrofia') method = METHODOLOGIES_DATABASE[1];
    if(user.goal === 'forca') method = METHODOLOGIES_DATABASE[2];
    if(user.goal === 'cutting') method = METHODOLOGIES_DATABASE[0];

    let workoutPlan = [];
    if(user.freq >= 5) { // PPL Profissional
        workoutPlan = [
            { title: "PUSH (Peito/Ombro/Tríceps)", ids: [1, 2, 36, 37, 51, 52] },
            { title: "PULL (Costas/Bíceps)", ids: [15, 11, 12, 46, 48, 42] },
            { title: "LEGS (Membros Inferiores)", ids: [21, 22, 25, 23, 31, 62] }
        ];
    } else if(user.freq == 4) { // Upper/Lower
        workoutPlan = [
            { title: "UPPER (Superior)", ids: [1, 11, 36, 12, 46, 51] },
            { title: "LOWER (Inferior)", ids: [21, 24, 22, 25, 31, 63] }
        ];
    } else { // Full Body
        workoutPlan = [{ title: "FULL BODY (Completo)", ids: [21, 1, 11, 36, 47, 61] }];
    }

    workoutPlan.forEach(day => {
        const card = document.createElement('div');
        card.className = "day-card";
        let exHtml = day.ids.map(id => {
            const ex = getById(id);
            return `<div class="exercise-item">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${ex.name}</strong>
                    <span style="color:${method.color}; font-family:'Orbitron'; font-size:0.7rem;">${method.protocol}</span>
                </div>
                <small style="color:#666;">${ex.target} | ${method.name}</small>
            </div>`;
        }).join('');
        card.innerHTML = `<h3><i class="fas fa-medal"></i> ${day.title}</h3>${exHtml}`;
        container.appendChild(card);
    });
}

// WIKI & CHARTS
function renderWiki() {
    document.getElementById('render-wiki').innerHTML = EXERCISES_DATABASE.map(ex => `
        <div class="lib-card" data-search="${ex.name.toLowerCase()}">
            <span class="muscle-tag">${ex.cat}</span>
            <h2 style="margin: 10px 0; font-family:'Orbitron'; font-size:1.1rem;">${ex.name}</h2>
            <p style="font-size:0.9rem;">${ex.desc}</p>
            <div style="background:rgba(173,255,47,0.1); padding:10px; border-left:3px solid var(--primary); font-size:0.8rem; color:var(--primary); margin-top:10px;">DICA: ${ex.tip}</div>
        </div>`).join('');
}

function searchWiki() {
    const query = document.getElementById('wiki-search').value.toLowerCase();
    document.querySelectorAll('.lib-card').forEach(card => {
        card.style.display = card.getAttribute('data-search').includes(query) ? 'block' : 'none';
    });
}

function updateEvolution() {
    const exercise = document.getElementById('log-exercise').value;
    const benchVal = parseFloat(document.getElementById('log-bench').value);
    const massVal = parseFloat(document.getElementById('log-mass').value);
    const currentMonth = MONTHS[new Date().getMonth()];
    if(benchVal > 0) evolutionStore.bench.push({val: benchVal, m: currentMonth, ex: exercise});
    if(massVal > 0) evolutionStore.mass.push({val: massVal, m: currentMonth});
    localStorage.setItem('z_freak_evolution_v3', JSON.stringify(evolutionStore));
    renderCharts();
}

function renderCharts() {
    const loadContainer = document.getElementById('chart-load');
    const massContainer = document.getElementById('chart-mass');
    const exerciseFilter = document.getElementById('filter-chart-exercise').value;

    const renderBars = (data, unit, isMass) => {
        const filteredData = isMass ? data : data.filter(d => d.ex === exerciseFilter);
        if(filteredData.length === 0) return `<p style="color:#444; width:100%; text-align:center; padding-top:70px;">SEM DADOS</p>`;
        const values = filteredData.map(d => d.val);
        const max = Math.max(...values) * 1.2;
        return filteredData.map((d) => `
            <div class="bar-group"><div class="bar" style="height: ${(d.val/max)*100}%; ${isMass ? 'background:#fff' : ''}" data-value="${d.val}${unit}"></div>
            <div class="bar-label">${d.m}</div></div>`).join('');
    };
    loadContainer.innerHTML = renderBars(evolutionStore.bench, 'kg', false);
    massContainer.innerHTML = renderBars(evolutionStore.mass, 'kg', true);
}

// 1. INJETAR OPÇÃO "INICIANTE" NO SELECIONADOR DE OBJETIVO
(function injectInicianteOption() {
    const goalSelect = document.getElementById('goal');
    if (goalSelect) {
        // Verifica se já existe para não duplicar
        if (![...goalSelect.options].some(o => o.value === 'iniciante')) {
            const option = document.createElement('option');
            option.value = 'iniciante';
            option.text = 'INICIANTE (ADAPTAÇÃO AB)';
            goalSelect.add(option, goalSelect.options[1]);
        }
    }
})();

// 2. ADICIONAR MÉTODO INICIANTE NO DATABASE
if (!METHODOLOGIES_DATABASE.some(m => m.name.includes("Iniciante"))) {
    METHODOLOGIES_DATABASE.push({ 
        name: "Adaptação AB", 
        desc: "Divisão clássica para iniciantes: Dia A (Empurrar) e Dia B (Puxar/Pernas). Foco em máquinas.",
        protocol: "3 sets x 15 reps",
        color: "#00ffcc"
    });
}

// 3. REESCREVER A LÓGICA DE TREINO PARA DIVISÃO AB REAL
const originalWorkoutFunc = generateStructuredWorkout;

generateStructuredWorkout = function(user) {
    if(user.goal === 'iniciante') {
        const container = document.getElementById('render-workout');
        container.innerHTML = "";
        const getById = (id) => EXERCISES_DATABASE.find(e => e.id === id);
        const method = METHODOLOGIES_DATABASE.find(m => m.name.includes("Iniciante"));

        // DIVISÃO REAL AB INICIANTE
        const workoutPlan = [
            { 
                title: "TREINO A (Peito / Ombro / Tríceps)", 
                ids: [7, 8, 45, 37, 53, 52] // Chest Press, Peck Deck, Desenv. Halter, Lat. Halter, Pulley Barra, Corda
            },
            { 
                title: "TREINO B (Costas / Pernas / Bíceps)", 
                ids: [11, 16, 22, 23, 46, 61] // Puxada Alta, Remada Baixa, Leg Press, Extensora, Rosca Direta, Abdominal
            }
        ];

        workoutPlan.forEach(day => {
            const card = document.createElement('div');
            card.className = "day-card";
            let exHtml = day.ids.map(id => {
                const ex = getById(id);
                return `<div class="exercise-item">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong>${ex.name}</strong>
                        <span style="color:${method.color}; font-family:'Orbitron'; font-size:0.7rem;">${method.protocol}</span>
                    </div>
                    <small style="color:#666;">EXECUÇÃO CONTROLADA | ${method.name}</small>
                </div>`;
            }).join('');
            card.innerHTML = `<h3><i class="fas fa-layer-group"></i> ${day.title}</h3>${exHtml}`;
            container.appendChild(card);
        });
    } else {
        originalWorkoutFunc(user);
    }
}; 

(function injectPasswordFields() {
    // 1. Adiciona campo de senha no LOGIN
    const loginEmail = document.getElementById('auth-email');
    if (loginEmail && !document.getElementById('auth-pass')) {
        const passInput = document.createElement('input');
        passInput.type = 'password';
        passInput.id = 'auth-pass';
        passInput.placeholder = 'Sua Senha de Monstro';
        passInput.style.marginTop = '10px';
        loginEmail.parentNode.insertBefore(passInput, loginEmail.nextSibling);
    }

    // 2. Adiciona campo de senha no CADASTRO (SETUP)
    const nameInput = document.getElementById('name');
    if (nameInput && !document.getElementById('setup-pass')) {
        const setupPass = document.createElement('input');
        setupPass.type = 'password';
        setupPass.id = 'setup-pass';
        setupPass.placeholder = 'Crie uma Senha';
        setupPass.required = true;
        setupPass.style.marginBottom = '15px';
        nameInput.parentNode.insertBefore(setupPass, nameInput.nextSibling);
    }
})();

// 2. REESCREVER AS FUNÇÕES DE AUTH PARA VALIDAR A SENHA
const originalHandleLogin = handleLogin;
handleLogin = function() {
    const email = document.getElementById('auth-email').value;
    const pass = document.getElementById('auth-pass').value;
    const saved = JSON.parse(localStorage.getItem('z_freak_user'));

    if (saved && saved.email === email && saved.password === pass) {
        startApp(saved);
    } else {
        alert("E-mail ou Senha incorretos! Tente novamente.");
    }
};

// 3. ATUALIZAR O CADASTRO PARA SALVAR A SENHA E O EMAIL
document.getElementById('main-setup').onsubmit = function(e) {
    e.preventDefault();
    const user = { 
        name: document.getElementById('name').value, 
        email: document.getElementById('auth-email').value, // Pega o email do campo de login
        password: document.getElementById('setup-pass').value, // Nova senha
        goal: document.getElementById('goal').value, 
        freq: parseInt(document.getElementById('freq').value),
        weight: parseFloat(document.getElementById('weight').value),
        height: parseFloat(document.getElementById('height').value),
        age: parseInt(document.getElementById('age').value)
    };
    localStorage.setItem('z_freak_user', JSON.stringify(user));
    startApp(user);
};