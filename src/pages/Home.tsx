import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Calendar, MapPin, Users, BookOpen,
  Award, Globe, Lightbulb, Microscope, Activity,
  Cpu, Leaf, TrendingUp, Mail, Wrench, Stethoscope,
  GraduationCap, Clock, Star, Building2, AlarmClock, BadgeCheck, ShieldCheck
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import institutoLogo from '@assets/Instituto_1783829507247.png';
import unapunoLogo from '@assets/unapuno_1783829507247.png';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

type EntryType = 'inauguracion' | 'magistral' | 'ponencia' | 'break' | 'almuerzo' | 'clausura';

interface SessionEntry {
  hora: string;
  ponente?: string;
  tema: string;
  type: EntryType;
}

/* ─── LUNES 13 DE JULIO ─────────────────────────────────────────── */
const lunesMañana: SessionEntry[] = [
  { hora: '08:30', tema: 'Inauguración oficial del IV Congreso de Iniciación Científica', type: 'inauguracion' },
  { hora: '09:00 – 10:00', ponente: 'Dra. Elizabeth V. Davila Maguiña', tema: 'La propiedad intelectual en los resultados de investigación', type: 'magistral' },
  { hora: '10:00 – 10:15', ponente: 'Reynaldo Mamani Arce, Kricelly Jazmin Mamani Ito', tema: 'Elaboración de biocompost enriquecido con bacterias promotoras del crecimiento en plantas para una agricultura sostenible', type: 'ponencia' },
  { hora: '10:15 – 10:30', ponente: 'Jelen Anahi Bautista Quispe', tema: 'Comportamiento poblacional de malezas asociadas al cultivo de papa durante su desarrollo fenológico en Puno, Perú', type: 'ponencia' },
  { hora: '10:30 – 10:45', ponente: 'Jhon Kennedy Cauna Apaza', tema: 'Caracterización cuantitativa y registro sistemático de indicadores de acopio y comercialización logística de la lana ovina, cadena agroindustrial no alimentario, Huayrapata, Moho-Puno (2026–2027)', type: 'ponencia' },
  { hora: '10:45 – 11:00', tema: 'Descanso', type: 'break' },
  { hora: '11:00 – 11:15', ponente: 'Brígida Reyna Yabar Laquihuanaco', tema: 'Potencial de las leguminosas como fuentes proteicas para el desarrollo de análogos cárnicos: calidad nutricional, propiedades funcionales y aceptabilidad sensorial', type: 'ponencia' },
  { hora: '11:15 – 11:30', ponente: 'Andrés Ladislao Cornejo Pinto', tema: 'Clasificación del estado de frescura en palta, tomate y limón mediante visión computacional y el espacio de color CIELAB', type: 'ponencia' },
  { hora: '11:30 – 11:45', ponente: 'Ever Pool Onofre Cachicatari, Yessica Chura Calcina', tema: 'Transformando alimentación en producción', type: 'ponencia' },
  { hora: '11:45 – 12:00', ponente: 'Brigida Sandra Mamani Arratia', tema: 'Recuperación de suelos contaminados por metales pesados mediante fitorremediación y enmiendas minerales en la mina escuela Carolina – Puno', type: 'ponencia' },
  { hora: '12:00 – 12:15', ponente: 'Kris Ximena Colquehuanca Zapana', tema: 'El Altiplano bajo cero: Predicción de heladas severas en Puno mediante aprendizaje profundo con atención temporal e integración del fenómeno El Niño', type: 'ponencia' },
  { hora: '12:15 – 12:30', ponente: 'Yimmy Cristhian Morocco Apaza', tema: 'Determinantes socioespaciales y evolución de la severidad de la anemia infantil en las provincias de la región Puno, 2021–2025', type: 'ponencia' },
  { hora: '12:30 – 12:45', ponente: 'Lady Kelyn Mendo Surco', tema: 'Tecnología electroquímica avanzada para la producción sostenible de hidrógeno verde en regiones altoandinas: innovación en materiales, electrodos impresos en 3D e integración de energías renovables', type: 'ponencia' },
  { hora: '12:45 – 13:00', ponente: 'Franco Rojas Luque, José Miguel Mendoza Macedo', tema: 'Andes-DT: gemelo digital neural con inteligencia artificial generativa y modelos de difusión para la simulación predictiva 4D del cambio climático en el altiplano peruano', type: 'ponencia' },
  { hora: '13:00 – 14:00', tema: 'Almuerzo', type: 'almuerzo' },
];

const lunesTarde: SessionEntry[] = [
  { hora: '14:00 – 14:15', ponente: 'Fabricio Mayta, Franklin Chura, Roy Tipo', tema: 'Inteligencia artificial generativa y transformers para el pronóstico en tiempo real de fenómenos meteorológicos extremos en el altiplano peruano', type: 'ponencia' },
  { hora: '14:15 – 14:30', ponente: 'Condori Bustincio Norka Guadalupe', tema: 'Uso de ladrillo pandereta en muros de albañilería confinada: análisis de incidencia y evaluación comparativa del ahorro económico frente al cumplimiento de la norma E.070 en un sector urbano de Puno', type: 'ponencia' },
  { hora: '14:30 – 14:45', ponente: 'Henry Washington Mamani Perez', tema: 'Implementación de un programa de seguridad basada en el comportamiento para la disminución de incidentes en la central de cooperativas mineras Rinconada y Lunar de Oro Ltda., Puno', type: 'ponencia' },
  { hora: '14:45 – 15:00', tema: 'Descanso', type: 'break' },
  { hora: '15:00 – 15:15', ponente: 'Angie Brigiet Larico Trujillo, Kennedy Luis Flores Ninaraque', tema: 'Evaluación de la inoculación con Bacterias Promotoras de Crecimiento en Plantas (BPCP) sobre el desarrollo de la biomasa, crecimiento y rendimiento de cuatro variedades del cultivo de quinua en C.E. Illpa', type: 'ponencia' },
  { hora: '15:15 – 15:30', ponente: 'Nilson Elwis Cahui Escarcena, Karen Yiuliana Viza Suaña', tema: 'Identificación rápida de la carne de alpaca y llama mediante la visión por computador y utilizando imágenes adquiridas con smartphone', type: 'ponencia' },
  { hora: '15:30 – 15:45', ponente: 'Albert Antony Alvarez Velasquez', tema: 'Efectividad del 1,8-cineol y d-limoneno sobre ansiedad, estrés y rendimiento cognitivo en adultos a >4300 m.s.n.m.', type: 'ponencia' },
  { hora: '15:45 – 16:00', ponente: 'Blas Len Eugenio Quispe Halanoca', tema: 'Terapia antituberculosa de precisión en población de gran altitud: predictores de toxicidad farmacológica y desarrollo de un algoritmo terapéutico individualizado en los Andes peruanos', type: 'ponencia' },
  { hora: '16:00 – 16:15', ponente: 'Anel Perú Luque Cusacani', tema: 'Prevalencia de Nemátodos Gastrointestinales en alpacas de la zona sur de la región Puno', type: 'ponencia' },
  { hora: '16:15 – 16:30', ponente: 'Royer Ribaldo Macedo Mamani', tema: 'Prevalencia de céstodes en el ispi (Orestias ispi)', type: 'ponencia' },
  { hora: '16:30 – 16:45', ponente: 'Jhon Eder Pilco Murillo, Flavio Gustavo I. Mamani Capaquira', tema: 'Evaluación de la producción de embriones in vitro en ovinos criollos bajo condiciones del altiplano peruano', type: 'ponencia' },
  { hora: '16:45 – 17:00', ponente: 'Jasmin Gabriela Quispe Zapana', tema: 'Dispositivo de flujo lateral para antígeno CagA en puntos críticos de venta ambulatoria: diseño conceptual y factibilidad analítica, Puno 2026', type: 'ponencia' },
];

/* ─── MARTES 14 DE JULIO ────────────────────────────────────────── */
const martesMañana: SessionEntry[] = [
  { hora: '09:00 – 10:00', ponente: 'Dra. Elizabeth V. Davila Maguiña', tema: 'De la investigación al mercado: La propiedad intelectual como herramienta para la transferencia de tecnología', type: 'magistral' },
  { hora: '10:00 – 10:15', ponente: 'Yeny Maribel Valeriano Cutiri', tema: 'Revitalizando el aimara desde la escuela: impacto de talleres lúdicos en las actitudes lingüísticas de estudiantes de primaria', type: 'ponencia' },
  { hora: '10:15 – 10:30', ponente: 'Jackeline Apaza Umpire', tema: 'Formas de razonamiento sobre la incertidumbre en la lectura ritual de la hoja de coca: una aproximación etnomatemática desde los yatiris de Juliaca', type: 'ponencia' },
  { hora: '10:30 – 10:45', ponente: 'Melany Jhojana Calsina Aroquipa', tema: 'Robótica educativa para potenciar el desarrollo de habilidades tecnológicas en estudiantes de educación primaria', type: 'ponencia' },
  { hora: '10:45 – 11:00', ponente: 'Myrian Katherine Quiza Ramos, Liseth Nayely Palomino Ccansaya', tema: 'Educación ambiental y desarrollo sostenible en estudiantes universitarios del altiplano puneño', type: 'ponencia' },
  { hora: '11:00 – 11:15', ponente: 'María de los Ángeles Soto Quispe, Luz Guiliana Apaza Tipo', tema: 'Perspectivas del uso de inteligencia artificial generativa ChatGPT y su relación con la formación académica en estudiantes universitarios', type: 'ponencia' },
  { hora: '11:15 – 11:30', tema: 'Descanso', type: 'break' },
  { hora: '11:30 – 11:45', ponente: 'Sandra Quispe Cruz', tema: 'Competencias digitales e inclusión digital en beneficiarios del centro integral de atención al adulto mayor Puno, 2026', type: 'ponencia' },
  { hora: '11:45 – 12:00', ponente: 'Nayely Nelly Tintaya Tinyata, Dina Yudith Huanca Chicani', tema: 'Prevalencia de anemia ferropénica en estudiantes universitarios del altiplano puneño', type: 'ponencia' },
  { hora: '12:00 – 12:15', ponente: 'Roxana Lizbeth Suaña Navarro, Leydi Katerin Gomez Masco', tema: 'Conciencia ambiental y cosmovisión andina en estudiantes de educación primaria de la Institución Educativa Glorioso San Carlos de Puno', type: 'ponencia' },
  { hora: '12:15 – 12:30', ponente: 'Martha Maquera Ccalla, Dayana Yanqui Chire', tema: 'Experiencias comunitarias del desarrollo de bienestar integral ante la contaminación del río Suches en Cojata – 2026', type: 'ponencia' },
  { hora: '12:30 – 12:45', ponente: 'Yovani D. Condori Zapana, Willinton Espinoza Poblete, Leydy Quiñonez Barreto', tema: 'Jerarquización visual de la minería en la prensa digital: un análisis comparativo de las fotografías periodísticas', type: 'ponencia' },
  { hora: '12:45 – 13:00', ponente: 'Mariana Esther Tovar Yucra', tema: 'IA y alfabetización visual: mapeo bibliométrico del análisis de imágenes educativas (2014–2025)', type: 'ponencia' },
  { hora: '13:00 – 14:00', tema: 'Almuerzo', type: 'almuerzo' },
];

const martesTarde: SessionEntry[] = [
  { hora: '14:00 – 14:15', ponente: 'Ronal Yasser Curro Humpiri', tema: 'La implementación de la inteligencia artificial en la redacción de artículos científicos cualitativos en estudiantes de la facultad de Ciencias de la Educación UNA – Puno – 2024', type: 'ponencia' },
  { hora: '14:15 – 14:30', ponente: 'Paola Huanca, Reyshell Miranda', tema: 'Innovación social y emprendimiento digital en criadores de camélidos del distrito de Macusani, provincia de Carabaya, 2026', type: 'ponencia' },
  { hora: '14:30 – 14:45', ponente: 'Damarhis Arguedas, Isabel Pacompia', tema: 'Nomofobia y cohesión familiar en estudiantes de la I.E.S. Independencia Nacional Puno – 2026', type: 'ponencia' },
  { hora: '14:45 – 15:00', ponente: 'Mary Cielo Cruz Paucar, Lisbeth Capacoila Velasquez', tema: 'Polarización ideológica y participación política digital en estudiantes de la Escuela Profesional de Ciencias de la Comunicación Social UNA, Puno, 2026', type: 'ponencia' },
  { hora: '15:00 – 15:15', ponente: 'Nohelia Aracely Vilca Quispe, María del Rosario Quispe Humpiri', tema: 'Impacto de la tecnología moderna en la identidad cultural de estudiantes de secundaria en Puno, Perú', type: 'ponencia' },
  { hora: '15:15 – 15:30', ponente: 'Viky Maribel Yucra Ramos', tema: 'Costeo tradicional versus costeo basado en actividades (ABC): implicancias para la fijación de precios en una empresa industrial de Puno', type: 'ponencia' },
  { hora: '15:30 – 15:45', ponente: 'Andrea Raquel Del Carpio Torres', tema: 'Marketing digital y comercio electrónico en empresas de América Latina y el Caribe: revisión sistemática de la producción científica', type: 'ponencia' },
  { hora: '15:45 – 16:00', ponente: 'Saúl Darío Arisaca Huayta, Ulises Mamani Lopez', tema: 'Conductas ciudadanas que obstaculizan la atención de emergencias: propuesta de un plan de concientización en la ciudad de Puno, 2026', type: 'ponencia' },
  { hora: '16:00 – 17:00', ponente: 'Dr. Hebert Hernán Soto Gonzales', tema: 'Desarrollo de un paquete biotecnológico microbiano para la reducción de patógenos en lodos de la planta de tratamiento de aguas residuales de Omo-Moquegua-Perú', type: 'magistral' },
  { hora: '17:00', tema: 'Ceremonia de Clausura', type: 'clausura' },
];

function SessionRow({ entry, index }: { entry: SessionEntry; index: number }) {
  const isMagistral = entry.type === 'magistral';
  const isSpecial = ['inauguracion', 'break', 'almuerzo', 'clausura'].includes(entry.type);

  if (isSpecial) {
    return (
      <motion.div
        variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}
        className="flex items-center gap-4 py-2.5 px-4 rounded-lg bg-muted/40 border border-border/40"
      >
        <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">{entry.hora}</span>
        <span className="text-sm font-semibold text-muted-foreground italic">{entry.tema}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}
      className={`flex gap-4 py-3.5 px-4 rounded-xl border transition-all ${
        isMagistral
          ? 'bg-[#166534]/6 border-[#166534]/25 hover:bg-[#166534]/10'
          : 'bg-card border-border hover:border-[#166534]/20 hover:shadow-sm'
      }`}
    >
      <div className="shrink-0 flex flex-col items-start pt-0.5">
        <span className="text-[11px] font-mono text-muted-foreground whitespace-nowrap w-28">{entry.hora}</span>
        {isMagistral && (
          <span className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-[#166534] bg-[#166534]/10 px-1.5 py-0.5 rounded-full">
            <Star className="w-2 h-2" /> Magistral
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        {entry.ponente && (
          <p className={`text-sm font-semibold mb-0.5 leading-snug ${isMagistral ? 'text-[#166534]' : 'text-foreground'}`}>
            {entry.ponente}
          </p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">{entry.tema}</p>
      </div>
    </motion.div>
  );
}

type DayKey = 'lunes' | 'martes';
type SessionKey = 'manana' | 'tarde';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<DayKey>('lunes');
  const [activeSession, setActiveSession] = useState<SessionKey>('manana');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sessions: Record<DayKey, Record<SessionKey, SessionEntry[]>> = {
    lunes: { manana: lunesMañana, tarde: lunesTarde },
    martes: { manana: martesMañana, tarde: martesTarde },
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Acerca', href: '#acerca' },
    { name: 'Autoridades', href: '#autoridades' },
    { name: 'Programa', href: '#programa' },
    { name: 'Ponentes', href: '#ponentes' },
    { name: 'Ejes', href: '#ejes' },
    { name: 'Recomendaciones', href: '#recomendaciones' },
    { name: 'Cómo llegar', href: '#como-llegar' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#166534] shadow-lg py-3' : 'bg-[#166534]/90 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={institutoLogo} alt="Instituto de Investigación" className="h-10 md:h-11 object-contain shrink-0" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-bold text-sm md:text-base tracking-wide">Instituto de Investigación</span>
              <span className="text-white/65 text-xs">Universidad Nacional del Altiplano</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(l => (
              <a key={l.name} href={l.href} className="text-white/85 hover:text-white text-sm font-medium tracking-wide transition-colors">
                {l.name}
              </a>
            ))}
          </div>
          <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 bg-[#166534]/97 backdrop-blur-md pt-24 px-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map(l => (
              <a key={l.name} href={l.href} onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-serif border-b border-white/10 pb-5">
                {l.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#166534]">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f3d20] to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/20 bg-white/8 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Universidad Nacional del Altiplano — Instituto de Investigación
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-[1.08]">
            IV Congreso de<br className="hidden md:block" /> Iniciación Científica
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Promoviendo la investigación, la innovación y el desarrollo científico en estudiantes universitarios.
          </motion.p>

          <motion.a variants={fadeUp} custom={3} initial="hidden" animate="visible"
            href="#programa"
            className="inline-block px-10 py-4 bg-white text-[#166534] rounded-lg font-bold text-base hover:bg-green-50 transition-all shadow-2xl hover:-translate-y-1">
            Ver Programa Completo
          </motion.a>

          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
            className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 text-sm font-medium text-white/80 border-t border-white/15 pt-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5"><Calendar className="w-4 h-4 opacity-60" /> 13 y 14 de julio de 2026</div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2.5"><MapPin className="w-4 h-4 opacity-60" /> Auditorio — E.P. Arquitectura y Urbanismo</div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2.5"><Building2 className="w-4 h-4 opacity-60" /> UNA Puno</div>
          </motion.div>
        </div>
      </section>

      {/* ACERCA */}
      <section id="acerca" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-6">Acerca del Congreso</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed">
              El IV Congreso de Iniciación Científica es el principal espacio de encuentro académico para estudiantes universitarios 
              de la región, organizado por el Instituto de Investigación de la Universidad Nacional del Altiplano, Puno. 
              Dos días de ponencias magistrales, presentaciones estudiantiles y diálogo científico.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {([
              { Icon: Award, title: 'Objetivo', text: 'Fomentar la cultura científica e investigadora en estudiantes de pregrado de la Universidad Nacional del Altiplano.' },
              { Icon: GraduationCap, title: 'Público Objetivo', text: 'Estudiantes de pregrado como ponentes y todo el público general de la Universidad Nacional del Altiplano.' },
              { Icon: Globe, title: 'Modalidad', text: 'Evento presencial con ponencias magistrales y presentaciones orales de investigación.' },
              { Icon: MapPin, title: 'Lugar', text: 'Auditorio de la Escuela Profesional de Arquitectura y Urbanismo, UNA Puno.' },
              { Icon: Calendar, title: 'Fechas', text: 'Lunes 13 y Martes 14 de julio de 2026.' },
              { Icon: Clock, title: 'Horario', text: 'Inicio: 08:30 hrs — Clausura: 17:00 hrs cada jornada.' },
            ] as const).map(({ Icon, title, text }, i) => (
              <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                key={i}
                className="bg-card border-l-4 border-l-[#166534] border border-border rounded-r-xl p-7 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#166534]/8 group-hover:bg-[#166534]/14 transition-colors rounded-full flex items-center justify-center text-[#166534] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADES */}
      <section id="autoridades" className="py-24 md:py-32 bg-[#166534]/4 border-y border-[#166534]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4">Autoridades y Responsables</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">Comité organizador del IV Congreso de Iniciación Científica 2026.</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.h3 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-[#166534] mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-[#166534]" /> Autoridades
              </motion.h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Dr. Paulino Machaca Ari', cargo: 'Rector', siglas: 'PM' },
                  { nombre: 'Dr. Mario Serafín Cuentas Alvarado', cargo: 'Vicerrector Académico', siglas: 'MC' },
                  { nombre: 'Dr. Ariel Velazco Cárdenas', cargo: 'Vicerrector de Investigación', siglas: 'AV' },
                ].map((a, i) => (
                  <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    key={i} className="bg-card rounded-xl p-5 border border-border shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#166534]/10 flex items-center justify-center text-[#166534] shrink-0 font-bold text-sm">
                      {a.siglas}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{a.nombre}</p>
                      <p className="text-xs text-[#166534] font-semibold mt-0.5">{a.cargo}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Universidad Nacional del Altiplano</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-[#166534] mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-[#166534]" /> Responsables del Congreso
              </motion.h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Dr. Ariel Rogelio Velazco Cárdenas', cargo: 'Vicerrector de Investigación', siglas: 'AV' },
                  { nombre: 'Dr. Israel Lima Medina', cargo: 'Director del Instituto de Investigación', siglas: 'IL' },
                ].map((r, i) => (
                  <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    key={i} className="bg-card rounded-xl p-5 border border-[#166534]/20 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#166534] flex items-center justify-center text-white shrink-0 font-bold text-sm">
                      {r.siglas}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{r.nombre}</p>
                      <p className="text-xs text-[#166534] font-semibold mt-0.5">{r.cargo}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Universidad Nacional del Altiplano</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMA COMPLETO */}
      <section id="programa" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4">Programa Oficial</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">
              Auditorio de la E.P. de Arquitectura y Urbanismo, UNA Puno — 13 y 14 de julio de 2026
            </motion.p>
          </div>

          {/* Day tabs */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex rounded-xl border border-border bg-muted/40 p-1 mb-4 max-w-sm mx-auto">
            {([['lunes', 'Lunes 13 julio'], ['martes', 'Martes 14 julio']] as [DayKey, string][]).map(([key, label]) => (
              <button key={key} onClick={() => { setActiveDay(key); setActiveSession('manana'); }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${activeDay === key ? 'bg-[#166534] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                {label}
              </button>
            ))}
          </motion.div>

          {/* Session tabs */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex rounded-xl border border-border bg-muted/20 p-1 mb-6 max-w-xs mx-auto">
            {([['manana', 'Mañana'] , ['tarde', 'Tarde']] as [SessionKey, string][]).map(([key, label]) => (
              <button key={key} onClick={() => setActiveSession(key)}
                className={`flex-1 py-1.5 px-4 rounded-lg text-xs font-semibold transition-all ${activeSession === key ? 'bg-white border border-border shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {label}
              </button>
            ))}
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-5 mb-5 justify-center text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#166534]/15 border border-[#166534]/25 inline-block" /> Ponencia magistral</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-card border border-border inline-block" /> Ponencia estudiantil</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-muted/60 border border-border/40 inline-block" /> Acto / Descanso</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeDay}-${activeSession}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
              className="space-y-2">
              {sessions[activeDay][activeSession].map((entry, i) => (
                <SessionRow key={i} entry={entry} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PONENTES MAGISTRALES */}
      <section id="ponentes" className="py-24 md:py-32 bg-[#166534]/4 border-y border-[#166534]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4">Ponentes Magistrales</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">Investigadores de renombre que compartirán su conocimiento a lo largo de las dos jornadas.</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                nombre: 'Dra. Elizabeth V. Davila Maguiña',
                foto: '/ponente-dra.jfif',
                temas: [
                  { dia: 'Lunes 13', hora: '09:00 – 10:00', tema: 'La propiedad intelectual en los resultados de investigación' },
                  { dia: 'Martes 14', hora: '09:00 – 10:00', tema: 'De la investigación al mercado: La propiedad intelectual como herramienta para la transferencia de tecnología' },
                ],
              },
              {
                nombre: 'Dr. Hebert Hernán Soto Gonzales',
                foto: '/ponente-dr.jfif',
                temas: [
                  { dia: 'Martes 14', hora: '16:00 – 17:00', tema: 'Desarrollo de un paquete biotecnológico microbiano para la reducción de patógenos en lodos de la planta de tratamiento de aguas residuales de Omo-Moquegua-Perú' },
                ],
              },
            ].map((p, i) => (
              <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                key={i}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 ring-4 ring-[#166534]/20 group-hover:ring-[#166534]/50 transition-all shadow-md">
                  <img src={p.foto} alt={p.nombre} className="w-full h-full object-cover object-top" />
                </div>
                <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#166534]/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#166534]">
                  <Star className="w-2.5 h-2.5" /> Ponente Magistral
                </div>
                <h3 className="text-xl font-bold mt-2 mb-4">{p.nombre}</h3>
                <div className="w-full space-y-3">
                  {p.temas.map((t, j) => (
                    <div key={j} className="text-left bg-muted/40 rounded-lg p-3 border border-border">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534]">{t.dia}</span>
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{t.hora}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">"{t.tema}"</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EJES TEMÁTICOS */}
      <section id="ejes" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4">Ejes Temáticos</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">Áreas de investigación representadas en las ponencias del congreso.</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
            {([
              { Icon: Wrench, title: 'Ingenierías', desc: 'Área orientada al desarrollo tecnológico, la innovación y la resolución de problemas mediante la aplicación del conocimiento científico en sistemas, infraestructura y procesos productivos.' },
              { Icon: Stethoscope, title: 'Biomédicas', desc: 'Área dedicada a la comprensión de los procesos biológicos y de salud humana, impulsando investigaciones que contribuyen a la prevención de enfermedades, el bienestar y el avance científico en ciencias de la vida.' },
              { Icon: Users, title: 'Sociales', desc: 'Área que estudia los fenómenos humanos, culturales y organizacionales, generando conocimiento para comprender y transformar la sociedad desde la educación, la comunicación, la economía y las humanidades.' },
            ] as const).map(({ Icon, title, desc }, i) => (
              <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                key={i}
                className="bg-card p-7 rounded-2xl border border-border shadow-sm flex flex-col relative overflow-hidden group hover:border-[#166534]/35 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-[0.025] text-[#166534] group-hover:scale-110 group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none">
                  <Icon size={130} />
                </div>
                <div className="w-12 h-12 bg-[#166534] text-white rounded-xl flex items-center justify-center mb-5 relative z-10 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 relative z-10">{title}</h3>
                <p className="text-muted-foreground text-sm relative z-10 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#166534]/4 border-y border-[#166534]/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4">Preguntas Frecuentes</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">Información sobre la participación en el congreso.</motion.p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border border-border p-4 shadow-sm">
            {[
              { q: '¿Cuántos días dura el congreso?', a: 'El congreso se desarrolla en dos jornadas: Lunes 13 y Martes 14 de julio de 2026, de 08:30 a 17:00 hrs cada día, en el Auditorio de la E.P. de Arquitectura y Urbanismo de la UNA Puno.' },
              { q: '¿Quiénes pueden participar como ponentes?', a: 'Estudiantes de pregrado de la Universidad Nacional del Altiplano que deseen presentar sus avances o resultados de investigación original. El evento también está abierto a todo el público general de la UNA Puno como asistentes.' },
              { q: '¿Cuántas ponencias magistrales hay?', a: 'El programa incluye tres ponencias magistrales a cargo de la Dra. Elizabeth V. Davila Maguiña (una por día) y el Dr. Hebert Hernán Soto Gonzales (Martes 14, 16:00 hrs).' },
              { q: '¿En qué idioma se presentan los trabajos?', a: 'Las presentaciones se realizan en español.' },
              { q: '¿Se otorgan certificados de participación?', a: 'Sí, los participantes y ponentes reciben certificado oficial avalado por la Universidad Nacional del Altiplano — Instituto de Investigación.' },
              { q: '¿Cuánto tiempo tiene cada ponente estudiantil?', a: 'Cada ponencia estudiantil tiene una duración de 15 minutos, siguiendo el formato estándar de presentación científica: introducción, metodología, resultados y conclusiones.' },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className={i === 5 ? 'border-none' : ''}>
                <AccordionTrigger className="text-base hover:text-[#166534] text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RECOMENDACIONES */}
      <section id="recomendaciones" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4">Recomendaciones para Ponentes</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">Indicaciones importantes para el día de su presentación.</motion.p>
          </div>

          {/* Puntualidad — card destacada */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#166534] text-white rounded-2xl p-8 md:p-10 mb-8 flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
            <div className="shrink-0 w-24 h-24 rounded-full bg-white/15 flex items-center justify-center relative z-10">
              <AlarmClock className="w-12 h-12 text-white" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                <BadgeCheck className="w-3.5 h-3.5" /> Puntualidad
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Llegue <span className="underline decoration-white/50 underline-offset-4">una hora antes</span> de su exposición</h3>
              <p className="text-white/75 text-base leading-relaxed max-w-xl">
                Se recomienda presentarse con anticipación para verificar el equipamiento audiovisual, registrarse en mesa de control y coordinar con el moderador de sesión antes del inicio de su ponencia.
              </p>
            </div>
          </motion.div>

          {/* Vestimenta formal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Varones */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all group">
              {/* Silueta varón formal SVG */}
              <div className="w-28 h-36 mb-6 text-[#166534] group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 80 110" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Cabeza */}
                  <circle cx="40" cy="14" r="12" />
                  {/* Cuello */}
                  <rect x="36" y="24" width="8" height="6" rx="2" />
                  {/* Saco / cuerpo */}
                  <path d="M18 34 C18 30 28 28 40 28 C52 28 62 30 62 34 L62 70 C62 73 60 74 57 74 L23 74 C20 74 18 73 18 70 Z" />
                  {/* Solapa izquierda */}
                  <path d="M40 28 L28 44 L40 40 Z" fill="white" opacity="0.15" />
                  {/* Solapa derecha */}
                  <path d="M40 28 L52 44 L40 40 Z" fill="white" opacity="0.15" />
                  {/* Corbata */}
                  <path d="M37 28 L35 50 L40 58 L45 50 L43 28 Z" fill="white" opacity="0.55" />
                  {/* Nudo corbata */}
                  <path d="M37 28 L40 33 L43 28 Z" fill="white" opacity="0.8" />
                  {/* Pantalón izquierdo */}
                  <path d="M23 74 L20 108 L36 108 L40 88 Z" />
                  {/* Pantalón derecho */}
                  <path d="M57 74 L60 108 L44 108 L40 88 Z" />
                  {/* Brazo izquierdo */}
                  <path d="M18 34 L8 58 C7 62 10 64 13 62 L22 42 Z" />
                  {/* Brazo derecho */}
                  <path d="M62 34 L72 58 C73 62 70 64 67 62 L58 42 Z" />
                  {/* Zapato izquierdo */}
                  <ellipse cx="26" cy="108" rx="8" ry="4" />
                  {/* Zapato derecho */}
                  <ellipse cx="54" cy="108" rx="8" ry="4" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#166534]/10 text-[#166534] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <ShieldCheck className="w-3 h-3" /> Varones
              </div>
              <h3 className="text-xl font-bold mb-3">Vestimenta Formal</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 text-left w-full max-w-xs">
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Terno o traje formal (oscuro preferible)</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Camisa de vestir con corbata</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Zapatos de cuero o vestir</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Presentación pulcra y ordenada</li>
              </ul>
            </motion.div>

            {/* Damas */}
            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all group">
              {/* Silueta dama formal SVG */}
              <div className="w-28 h-36 mb-6 text-[#166534] group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 80 110" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Cabello */}
                  <path d="M26 14 C26 4 54 4 54 14 C54 8 50 5 40 5 C30 5 26 8 26 14 Z" opacity="0.45" />
                  {/* Cabeza */}
                  <circle cx="40" cy="15" r="12" />
                  {/* Cuello */}
                  <rect x="37" y="25" width="6" height="5" rx="2" />
                  {/* Blusa / parte superior */}
                  <path d="M24 34 C24 30 31 27 40 27 C49 27 56 30 56 34 L58 52 L22 52 Z" />
                  {/* Solapa / detalle cuello blusa */}
                  <path d="M40 27 L35 36 L40 34 L45 36 Z" fill="white" opacity="0.2" />
                  {/* Falda / parte inferior */}
                  <path d="M20 52 L14 100 L66 100 L60 52 Z" />
                  {/* Pliegue falda */}
                  <path d="M40 52 L36 100 L44 100 Z" fill="white" opacity="0.08" />
                  {/* Brazo izquierdo */}
                  <path d="M24 34 L15 54 C14 57 17 59 19 57 L26 40 Z" />
                  {/* Brazo derecho */}
                  <path d="M56 34 L65 54 C66 57 63 59 61 57 L54 40 Z" />
                  {/* Zapato izquierdo */}
                  <ellipse cx="26" cy="102" rx="7" ry="4" />
                  <rect x="24" y="96" width="4" height="8" rx="1" />
                  {/* Zapato derecho */}
                  <ellipse cx="54" cy="102" rx="7" ry="4" />
                  <rect x="52" y="96" width="4" height="8" rx="1" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#166534]/10 text-[#166534] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <ShieldCheck className="w-3 h-3" /> Damas
              </div>
              <h3 className="text-xl font-bold mb-3">Vestimenta Formal</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 text-left w-full max-w-xs">
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Traje formal, sastre o vestido de vestir</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Colores sobrios y elegantes</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Calzado de vestir o tacón moderado</li>
                <li className="flex items-start gap-2"><span className="text-[#166534] mt-0.5">✓</span> Presentación pulcra y ordenada</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="como-llegar" className="py-24 md:py-32 bg-[#166534]/4 border-y border-[#166534]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4">Cómo Llegar</motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted-foreground text-lg">
              Auditorio de la Escuela Profesional de Arquitectura y Urbanismo — Ciudad Universitaria, UNA Puno
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              title="Ubicación del auditorio"
              src="https://maps.google.com/maps?q=Escuela+Profesional+de+Arquitectura+y+Urbanismo+Universidad+Nacional+del+Altiplano+Puno&output=embed&z=17"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-card border border-border rounded-xl px-6 py-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#166534]/10 flex items-center justify-center text-[#166534] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Auditorio E.P. de Arquitectura y Urbanismo</p>
                <p className="text-muted-foreground text-sm">Av. Floral 1153, Ciudad Universitaria, Puno, Perú</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/jLyRSqvtQjaAvuQJA"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white rounded-lg font-semibold text-sm hover:bg-[#14532d] transition-colors shadow-md whitespace-nowrap">
              <MapPin className="w-4 h-4" />
              Abrir en Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif font-bold mb-4">Contáctanos</motion.h2>
              <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-muted-foreground text-lg mb-10">El comité organizador está disponible para atender consultas sobre el congreso.</motion.p>

              <div className="space-y-7">
                {([
                  { Icon: Mail, label: 'Correo Electrónico', value: 'eventos.instituto@unap.edu.pe', href: 'mailto:eventos.instituto@unap.edu.pe' as string | undefined },
                  { Icon: MapPin, label: 'Sede del Evento', value: 'Auditorio E.P. Arquitectura y Urbanismo\nCiudad Universitaria, UNA Puno', href: undefined as string | undefined },
                  { Icon: Building2, label: 'Oficina del Instituto de Investigación', value: 'Edificio de Educación Continua\nAv. El Sol 329 – Segundo Piso', href: undefined as string | undefined },
                ]).map(({ Icon, label, value, href }, i) => (
                  <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#166534]/10 flex items-center justify-center text-[#166534] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-muted-foreground hover:text-[#166534] transition-colors text-sm">{value}</a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#166534]" /> Información del Evento
              </h3>
              <div className="space-y-0 divide-y divide-border">
                {[
                  { label: 'Evento', value: 'IV Congreso de Iniciación Científica' },
                  { label: 'Fechas', value: 'Lunes 13 y Martes 14 de julio de 2026' },
                  { label: 'Horario', value: '08:30 – 17:00 hrs (cada jornada)' },
                  { label: 'Sede', value: 'Auditorio E.P. Arquitectura y Urbanismo' },
                  { label: 'Institución', value: 'Universidad Nacional del Altiplano, Puno' },
                  { label: 'Organizador', value: 'Instituto de Investigación – UNA Puno' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-3.5 last:border-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">{item.label}</span>
                    <span className="text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2d1a] text-white/65 py-14 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <img src={unapunoLogo} alt="UNA Puno" className="h-11 object-contain" />
                <div className="h-9 w-px bg-white/20" />
                <img src={institutoLogo} alt="Instituto de Investigación" className="h-10 object-contain" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">IV Congreso de Iniciación Científica</h3>
              <p className="text-white/55 text-sm max-w-sm leading-relaxed">
                Promoviendo la investigación científica y la innovación desde las aulas universitarias. Universidad Nacional del Altiplano — Instituto de Investigación, 2026.
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Secciones</h4>
              <ul className="space-y-2.5 text-sm">
                {[['#inicio', 'Inicio'], ['#acerca', 'Acerca del Congreso'], ['#autoridades', 'Autoridades'], ['#programa', 'Programa'], ['#ponentes', 'Ponentes'], ['#ejes', 'Ejes Temáticos']].map(([href, label]) => (
                  <li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Información</h4>
              <ul className="space-y-2.5 text-sm">
                <li><span className="text-white/55">13 y 14 de julio de 2026</span></li>
                <li><span className="text-white/55">08:30 – 17:00 hrs</span></li>
                <li><span className="text-white/55">Auditorio Arq. y Urbanismo, UNA Puno</span></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs">
            <p>© 2026 Universidad Nacional del Altiplano — Instituto de Investigación. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
