import React from "react";

const Payments = () => {
     const payments = [
     { id: 1, member: 'John Doe', amount: 12500.00, method: 'Credit Card', status: 'Completed', date: '2024-03-15', invoice: 'INV-001' },
     { id: 2, member: 'Jane Smith', amount: 16500.00, method: 'PayPal', status: 'Pending', date: '2024-03-14', invoice: 'INV-002' },
     { id: 3, member: 'Mike Johnson', amount: 14500.00, method: 'Bank Transfer', status: 'Completed', date: '2024-03-13', invoice: 'INV-003' },
     { id: 4, member: 'Sarah Wilson', amount: 10000.00, method: 'Credit Card', status: 'Failed', date: '2024-03-12', invoice: 'INV-004' },
     { id: 5, member: 'David Brown', amount: 25000.00, method: 'PayPal', status: 'Completed', date: '2024-03-11', invoice: 'INV-005' },
   ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Make a Payment Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 max-w-3xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-2">Make a Payment</h2>
        <p className="text-gray-400 text-sm mb-6">Payment due: Aug 1, 2024</p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* QR Code */}
          <div className="bg-white p-2 rounded-lg">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yourpaymentlink.com"
              alt="QR Code"
              className="w-36 h-36"
            />
          </div>

          {/* Amount & Payment Methods */}
          <div className="flex flex-col items-center md:items-start gap-4">
                         <div>
               <p className="text-gray-400 text-sm">Amount</p>
               <p className="text-2xl font-bold">₹2,500.00</p>
             </div>

                         <button className="w-40 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition cursor-pointer">
               PayPal
             </button>
             <button className="w-40 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold transition cursor-pointer">
               VISA
             </button>
             <button className="w-40 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition cursor-pointer">
               Mastercard
             </button>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          Need help?{" "}
                     <a href="#" className="text-blue-400 hover:underline cursor-pointer">
             Contact us.
           </a>
        </p>
      </div>

      {/* Existing Payments Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Payments</h1>
                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
             New Payment
           </button>
        </div>

        {/* Payment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                     <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
             <h3 className="text-lg font-semibold text-white">Total Revenue</h3>
             <p className="text-3xl font-bold text-green-400">₹37,85,000</p>
           </div>
                     <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
             <h3 className="text-lg font-semibold text-white">This Month</h3>
             <p className="text-3xl font-bold text-blue-400">₹10,25,000</p>
           </div>
                     <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
             <h3 className="text-lg font-semibold text-white">Pending</h3>
             <p className="text-3xl font-bold text-yellow-400">₹1,75,000</p>
           </div>
                     <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
             <h3 className="text-lg font-semibold text-white">Failed</h3>
             <p className="text-3xl font-bold text-red-400">₹37,500</p>
           </div>
        </div>

        {/* Payment Methods + Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Credit Card</span>
                <span className="text-white font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">PayPal</span>
                <span className="text-white font-semibold">30%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Bank Transfer</span>
                <span className="text-white font-semibold">25%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {payments.slice(0, 3).map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-600 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{payment.member}</p>
                    <p className="text-gray-300 text-sm">{payment.date}</p>
                  </div>
                                     <div className="text-right">
                     <p className="text-white font-semibold">₹{payment.amount.toLocaleString('en-IN')}</p>
                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payment.status)}`}>
                       {payment.status}
                     </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-600">
            <h3 className="text-lg font-semibold text-white">Payment History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y divide-gray-600">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-600 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{payment.member}</div>
                    </td>
                                         <td className="px-6 py-4 whitespace-nowrap">
                       <div className="text-sm font-semibold text-white">₹{payment.amount.toLocaleString('en-IN')}</div>
                     </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{payment.method}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{payment.invoice}</div>
                    </td>
                                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                       <button className="text-blue-400 hover:text-blue-300 mr-3 cursor-pointer">View</button>
                       <button className="text-green-400 hover:text-green-300 mr-3 cursor-pointer">Download</button>
                       <button className="text-red-400 hover:text-red-300 cursor-pointer">Refund</button>
                     </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
