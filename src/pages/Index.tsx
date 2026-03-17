import { Canvas } from '@react-three/fiber'
import { KinectScene } from '@/components/kinect-scene'
import { Leva } from 'leva'

export default function Index() {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      <Canvas
        camera={{
          position: [0, 0, 500],
          fov: 50,
          near: 1,
          far: 10000
        }}
        gl={{ alpha: false }}
        scene={{ background: null }}
      >
        <KinectScene />
      </Canvas>

      <Leva collapsed={true} />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-white font-light tracking-[0.3em] text-sm uppercase">Voxel Canvas</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/60 hover:text-white text-sm tracking-wider transition-colors duration-300">Возможности</a>
          <a href="#" className="text-white/60 hover:text-white text-sm tracking-wider transition-colors duration-300">Галерея</a>
          <a href="#" className="text-white/60 hover:text-white text-sm tracking-wider transition-colors duration-300">Контакты</a>
        </nav>
        <button className="border border-white/30 text-white/80 hover:text-white hover:border-white/70 text-sm px-5 py-2 rounded-full tracking-wider transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
          Начать
        </button>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6 text-center">
        <p className="text-blue-300/80 text-xs tracking-[0.5em] uppercase mb-6 font-light">
          Интерактивная 3D-визуализация
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-thin tracking-tight leading-none mb-6 max-w-3xl">
          Пространство в<br />
          <span className="font-light italic text-blue-200">точках данных</span>
        </h1>
        <p className="text-white/40 text-base md:text-lg font-light max-w-md leading-relaxed mb-10">
          Воксельная визуализация превращает глубину в искусство. Двигайте мышью, чтобы исследовать пространство.
        </p>
        <div className="pointer-events-auto flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-8 py-3 rounded-full tracking-wider transition-all duration-300 shadow-lg shadow-blue-500/20">
            Исследовать
          </button>
          <button className="text-white/50 hover:text-white/80 text-sm tracking-wider transition-colors duration-300 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-current" />
            Узнать больше
          </button>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8 z-10">
        <div className="text-white/25 text-xs tracking-widest uppercase font-light">
          Движение мыши управляет камерой
        </div>
        <div className="flex items-center gap-6">
          <div className="text-white/20 text-xs tracking-wider">Three.js · WebGL · Shaders</div>
        </div>
      </div>
    </div>
  )
}
