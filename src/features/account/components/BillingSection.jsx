import React, { useState } from 'react';
import { getWalletBalance, addPaymentMethod } from '../../../services/clientService';
import useFetch from '../../../hooks/useFetch';
import { toast } from 'sonner';

const BillingSection = () => {
  const { data: balanceData, loading, error } = useFetch(getWalletBalance);
  const [isAddingMethod, setIsAddingMethod] = useState(false);
  const [paymentType, setPaymentType] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    phone: '',
    firstName: '',
    lastName: ''
  });
  const [saving, setSaving] = useState(false);

  const handleAddMethod = async () => {
    setSaving(true);
    try {
      const payload = {
        methodName: paymentType === 'card' ? 'InstaPay' : (paymentType === 'insta' ? 'InstaPay' : 'eWallet'),
        accountIdentifier: paymentType === 'card' ? formData.cardNumber : formData.phone
      };
      await addPaymentMethod(payload);
      toast.success('Billing method added successfully!');
      setIsAddingMethod(false);
    } catch (err) {
      toast.error('Failed to add billing method');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div id="billing" className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Billing & Payments</h1>

      {!isAddingMethod ? (
        <div id="billing-view">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Outstanding balance</h3>
            <div className="text-5xl font-bold text-gray-900 my-2">
              {loading ? '...' : `${balanceData?.balance?.toFixed(2) || '0.00'} EGP`}
            </div>
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <span>≈ {loading ? '...' : (balanceData?.balance / 48).toFixed(2)} USD</span>
              <span className="text-xs px-2 py-1 bg-white rounded-md border border-gray-100">1 USD = 48.00 EGP</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-6 md:p-8 mb-8 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Billing methods</h3>
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold">✓</div>
            </div>
            
            <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 text-sm font-medium mb-6">
                You haven't set up any billing methods yet. Add a method so you can hire when you're ready.
              </p>
              <button 
                className="px-8 py-3 rounded-full font-bold text-sm bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
                onClick={() => setIsAddingMethod(true)}
              >
                + Add a billing method
              </button>
            </div>
            
            <p className="text-xs text-gray-400">
              Your billing method will be charged only when you hire a freelancer or purchase a service.
            </p>
          </div>
        </div>
      ) : (
        <div id="billing-add" className="bg-white rounded-3xl shadow-card-lg border border-black/5 p-6 md:p-8 mb-8 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Add a billing method</h3>
            <button className="text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setIsAddingMethod(false)}>✕</button>
          </div>

          <div className="flex gap-4 mb-8 bg-gray-50 p-1 rounded-2xl border border-gray-100">
            {['card', 'insta', 'wallet'].map(type => (
              <label key={type} className="flex-1 relative cursor-pointer">
                <input 
                  type="radio" 
                  name="paymentType" 
                  value={type} 
                  checked={paymentType === type}
                  onChange={() => setPaymentType(type)}
                  className="hidden"
                />
                <span className={`flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm transition-all border border-transparent ${
                  paymentType === type 
                    ? 'bg-white text-amber-600 shadow-md border-gray-100 scale-[1.02]' 
                    : 'text-gray-500 hover:bg-white/50'
                }`}>
                  {type === 'card' ? 'Payment card' : type === 'insta' ? 'InstaPay' : 'E-Wallet'}
                </span>
              </label>
            ))}
          </div>

          <div className="space-y-6">
            {paymentType === 'card' && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="mb-6">
                  <label className="block font-semibold text-sm mb-2 text-gray-900 tracking-wide">Card number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-amber-600 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all" 
                    placeholder="0000 0000 0000 0000"
                    value={formData.cardNumber}
                    onChange={e => setFormData({...formData, cardNumber: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-sm mb-2 text-gray-900 tracking-wide">First name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-amber-600 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all" placeholder="First name" />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm mb-2 text-gray-900 tracking-wide">Last name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-amber-600 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all" placeholder="Last name" />
                  </div>
                </div>
              </div>
            )}

            {(paymentType === 'insta' || paymentType === 'wallet') && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                <label className="block font-semibold text-sm mb-2 text-gray-900 tracking-wide">
                  Phone Number ({paymentType === 'insta' ? 'InstaPay' : 'E-Wallet'})
                </label>
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-[46px] bg-gray-50 border border-slate-200 rounded-lg flex items-center justify-center text-2xl shadow-inner">🇪🇬</div>
                  <input 
                    type="text" 
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-amber-600 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all" 
                    placeholder="10xxxxxxxxx" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-10">
            <button 
              className="px-10 py-3 rounded-full font-bold text-sm bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50"
              onClick={handleAddMethod}
              disabled={saving}
            >
              {saving ? 'Adding...' : 'Save Method'}
            </button>
            <button 
              className="px-10 py-3 rounded-full font-bold text-sm bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all"
              onClick={() => setIsAddingMethod(false)}
              disabled={saving}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingSection;
