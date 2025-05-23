import { useState } from 'react';
import { User, Menu, X, Edit, LogOut } from 'lucide-react';

export default function ModernHeader() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="bg-gray-800 h-[80px] flex items-center">
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <User className="w-7 h-7 text-white" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-200/50 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-200/50">
                  <p className="text-sm font-medium text-slate-900">Usuario</p>
                  <p className="text-sm text-slate-500 truncate">usuario@email.com</p>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <Edit className="w-4 h-4 mr-3 text-slate-500" />
                    Editar Perfil
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      // Aquí iría la lógica para cerrar sesión
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Salir
                  </button>
                </div>
              </div>
            )}
          </div>

      {/* Overlay para cerrar dropdowns al hacer click fuera */}
      {(isProfileDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
}